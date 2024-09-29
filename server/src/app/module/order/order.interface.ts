import { Types } from 'mongoose'

interface IOrder {
    userId: Types.ObjectId
    serviceName: string
    fileFormat: string
    background: string
    path: string
    driveLink: string
    status?: string
    message?: string
}

export default IOrder
