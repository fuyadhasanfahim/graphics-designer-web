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

const getOrderByOrderId = async (req: Request, res: Response) => {
    try {
        const { orderID } = req.params

        if (!orderID) {
            return res.status(400).json({ error: 'Order ID is required' })
        }

        const order = await OrderServices.getOrderFromDBById(orderID)

        if (!order) {
            return res.status(404).json({ error: 'No order found for this ID' })
        }

        res.status(200).json({ order })
    } catch (error) {
        res.status(500).json({ error: (error as Error).message })
    }
}

const updateOrder: RequestHandler = async (req, res) => {
    const { orderId } = req.params
    const {status} = req.body
    
    try {
        const updatedOrder = await OrderServices.updateOrderService(
            orderId,
            status,
        )

        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' })
        }

        return res
            .status(200)
            .json({ message: 'Order updated successfully', updatedOrder })
    } catch (error) {
        return res.status(500).json({ message: (error as Error).message })
    }
}

const getAllOrders: RequestHandler = async (req, res) => {
    try {
        const orders = await OrderServices.getAllOrdersFromDB()

        res.status(200).json({
            success: true,
            message: 'Orders are retrieved successfully.',
            data: orders,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
            error,
        })
    }
}

export const OrderControllers = {
    createOrderController,
    getUserOrdersController,
    updateOrder,
    getOrderByOrderId,
    getAllOrders,
}
