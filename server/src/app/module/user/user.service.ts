import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import IUser from './user.interface'
import UserModel from './user.schema'
import config from '../../config'

export const registerUser = async (
    userData: Partial<IUser>,
): Promise<IUser> => {
    const { email, username } = userData

    const existingUser = await UserModel.findOne({
        $or: [{ email }, { username }],
    })

    if (existingUser) {
        throw new Error('User with this email or username already exists')
    }

    const isDeleted = await UserModel.findOne({
        isDeleted: true,
    })

    if (isDeleted) {
        throw new Error(
            'User with this email or username is deleted! Try again with a different email or username',
        )
    }

    const user = new UserModel(userData)
    await user.save()
    return user
}

export const loginUser = async (
    email: string,
    password: string,
): Promise<{ token: string; user: IUser }> => {
    const user = await UserModel.findOne({
        $or: [{ email: email }, { username: email }],
    })

    if (!user) {
        throw new Error('Invalid credentials')
    }

    const isDeleted = await UserModel.findOne({
        isDeleted: true,
    })

    if (isDeleted) {
        throw new Error(
            'User with this email or username is deleted! Try again with a different email or username',
        )
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid credentials')
    }

    const token = jwt.sign(
        { id: user._id, email: user.email },
        config.jwt_secret as string,
        {
            expiresIn: '7d',
        },
    )

    return { token, user }
}

export const getUserById = async (id: string) => {
    const isDeleted = await UserModel.findOne({
        isDeleted: true,
    })

    if (isDeleted) {
        throw new Error(
            'User with this email or username is deleted! Try again with a different email or username',
        )
    }

    const user = await UserModel.findById(id).select('-password')
    if (!user) throw new Error('User not found')
    return user
}

export const getUserFromDB = async (userId: string) => {
    const user = await UserModel.findById(userId)
    if (!user) {
        throw new Error('User not found')
    }
    return user
}

export const deleteUserById = async (userId: string) => {
    const user = await UserModel.findById(userId)

    if (!user) {
        throw new Error('User not found')
    }

    if (user.role === 'SuperAdmin') {
        return { message: 'Cannot delete a SuperAdmin user' }
    }

    const updatedUser = await UserModel.findOneAndUpdate(
        { _id: userId },
        { isDeleted: true },
        { new: true },
    )

    return updatedUser
}

export const updateUserById = async (userId: string, updatedUser: IUser) => {
    return await UserModel.findOneAndUpdate({ _id: userId }, updatedUser)
}

export const getAllUsers = async () => {
    try {
        const users = await UserModel.find({ role: { $ne: 'SuperAdmin' } })
        return users
    } catch (error) {
        throw new Error((error as Error).message)
    }
}
