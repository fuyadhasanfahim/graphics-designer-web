import { Request, Response } from 'express'
import {
    deleteUserById,
    getAllUsers,
    getUserById,
    getUserFromDB,
    loginUser,
    registerUser,
    updateUserById,
} from './user.service'
import jwt from 'jsonwebtoken'
import config from '../../config'

const generateAccessToken = (userId: string) => {
    return jwt.sign({ id: userId }, config.jwt_secret as string, {
        expiresIn: '7d',
    })
}

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await registerUser(req.body)

        const accessToken = generateAccessToken(user._id.toString())

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                profileImage: user.profileImage,
            },
            accessToken,
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body

    try {
        const { user } = await loginUser(email, password)

        const accessToken = generateAccessToken(user._id.toString())

        res.status(200).json({
            message: 'Login successful',
            accessToken,
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                phone: user.phone,
                profileImage: user.profileImage,
            },
        })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const getCurrentUser = async (req: Request, res: Response) => {
    try {
        const token = req.cookies.accessToken
        if (!token) throw new Error('Access token not found')

        const decoded = jwt.verify(token, config.jwt_secret as string) as {
            id: string
        }

        const user = await getUserById(decoded.id)

        if (!user) throw new Error('User not found')

        res.status(200).json({ user })
    } catch (error) {
        res.status(400).json({ message: (error as Error).message })
    }
}

export const getUser = async (req: Request, res: Response) => {
    const { userId } = req.params

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required' })
    }

    try {
        const user = await getUserFromDB(userId)
        res.status(200).json({ user })
    } catch (error) {
        // Handle specific error cases
        if (error instanceof Error && error.message === 'User not found') {
            return res.status(404).json({ message: error.message })
        }
        res.status(500).json({ message: 'Internal server error' })
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: 'User ID is required' })
    }

    try {
        await deleteUserById(id)
        return res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        return res.status(500).json({ message: (error as Error).message })
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    const updatedUser = req.body

    if (!id) {
        return res.status(400).json({ message: 'User ID is required' })
    }

    try {
        await updateUserById(id, updatedUser)
        return res.status(200).json({ message: 'User updated successfully' })
    } catch (error) {
        if (error) {
            return res.status(400).json({ message: (error as Error).message })
        }
        return res.status(500).json({ message: (error as Error).message })
    }
}

export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()

        res.status(200).json({
            success: true,
            data: users,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
        })
    }
}
