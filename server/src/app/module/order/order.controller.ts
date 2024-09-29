import { Request, RequestHandler, Response } from 'express'
import { OrderServices } from './order.service'
import { Types } from 'mongoose'

const createOrderController: RequestHandler = async (req, res) => {
    try {
        const {
            serviceName,
            fileFormat,
            background,
            path,
            driveLink,
            message,
        } = req.body
        const { userId } = req.params

        if (!serviceName || !fileFormat || !background || !path || !driveLink) {
            return res
                .status(400)
                .json({ error: 'All fields are required except message' })
        }

        const newOrder = await OrderServices.createOrderIntoDB({
            userId: new Types.ObjectId(userId),
            serviceName,
            fileFormat,
            background,
            path,
            driveLink,
            message,
        })

        res.status(201).json({
            message: 'Order created successfully',
            order: newOrder,
        })
    } catch (error) {
        res.status(500).json({ error: (error as Error).message })
    }
}

const getUserOrdersController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' })
        }

        const orders = await OrderServices.getUserOrdersFromDB(userId)

        res.status(200).json({ orders })
    } catch (error) {
        res.status(500).json({ error: (error as Error).message })
    }
}

export const OrderControllers = {
    createOrderController,
    getUserOrdersController,
}
