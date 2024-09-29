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

export const OrderServices = {
    createOrderIntoDB,
    getUserOrdersFromDB,
}
