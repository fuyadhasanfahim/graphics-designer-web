import { Schema } from 'mongoose'
import { IMessage } from './message.interface'

const MessageSchema = new Schema<IMessage>(
    {
        conversationId: {
            type: String,
            required: true,
        },
        sender: {
            userId: {
                type: String,
                ref: 'User',
                required: true,
            },
            name: {
                firstName: { type: String, ref: 'User', required: true },
                lastName: { type: String, ref: 'User', required: true },
            },
            email: { type: String, ref: 'User', required: true },
            profileImage: { type: String, ref: 'User', required: true },
        },

        message: { type: String, required: true },
    },
    {
        timestamps: true,
    },
)

export default MessageSchema
