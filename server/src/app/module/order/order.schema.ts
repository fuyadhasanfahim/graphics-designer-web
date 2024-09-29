import { Schema, Document } from 'mongoose'
import IOrder from './order.interface'

export interface OrderDocument extends IOrder, Document {}

const OrderSchema = new Schema<OrderDocument>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        serviceName: {
            type: String,
            required: true,
        },
        fileFormat: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
        driveLink: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: 'Pending',
        },
        message: {
            type: String,
        },
    },
    { timestamps: true },
)

export default OrderSchema
