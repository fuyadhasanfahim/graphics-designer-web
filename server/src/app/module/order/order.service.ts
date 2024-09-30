import IOrder from './order.interface'
import OrderModel from './order.model'

const createOrderIntoDB = async (orderData: IOrder) => {
    const newOrder = new OrderModel(orderData)
    return await newOrder.save()
}

const getUserOrdersFromDB = async (userId: string) => {
    const orders = await OrderModel.find({ userId }).exec()
    if (!orders || orders.length === 0) {
        return { message: 'No orders found for this user.' }
    }
    return orders
}

const getOrderFromDBById = async (orderID: string) => {
    const order = await OrderModel.findById(orderID).exec()

    if (!order) {
        throw new Error('No order found for this ID')
    }

    return order
}

const updateOrderService = async (orderId: string, orderData: IOrder) => {
    try {
        const updatedOrder = await OrderModel.findOneAndUpdate(
            { orderId },
            { $set: orderData },
            { new: true },
        )

        return updatedOrder
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

export const OrderServices = {
    createOrderIntoDB,
    getUserOrdersFromDB,
    updateOrderService,
    getOrderFromDBById,
}
