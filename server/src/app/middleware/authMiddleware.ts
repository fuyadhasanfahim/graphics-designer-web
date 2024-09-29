import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import UserModel from '../module/user/user.schema'

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const token = req.cookies.authToken

    if (!token) {
        return res
            .status(401)
            .json({ error: 'Access denied, no token provided' })
    }

    try {
        const decodedToken = jwt.verify(
            token,
            config.jwt_secret as string,
        ) as JwtPayload

        if (!decodedToken || !decodedToken.id) {
            return res
                .status(401)
                .json({ error: 'Invalid token or no user ID in token' })
        }

        const user = await UserModel.findById(decodedToken.id)

        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        req.body.user = user
        next()
    } catch (error) {
        return res.status(401).json({ error: (error as Error).message })
    }
}
