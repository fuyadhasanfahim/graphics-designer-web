import { model } from 'mongoose'
import MessageSchema from './message.schema'
import { IMessage } from './message.interface'

const MessageModel = model<IMessage>('Message', MessageSchema)

export default MessageModel
