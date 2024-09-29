import { model } from 'mongoose'
import OrderSchema, { OrderDocument } from './order.schema'

const OrderModel = model<OrderDocument>('Order', OrderSchema)

export default OrderModel
