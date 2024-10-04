import { NextFunction, Request, Response } from 'express'
import { z } from 'zod'
import MessageValidation from '../module/message/message.validation'

export default function validateMessage(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    try {
        MessageValidation.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({
                error: 'Validation failed',
                details: error.errors,
            })
        } else {
            next(error)
        }
    }
}
