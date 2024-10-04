import UserModel from '../user/user.schema'
import { IMessage, IUserMessage } from './message.interface'
import MessageModel from './message.model'

const setMessageIntoDB = async (
    conversationId: string,
    sender: IUserMessage,
    messageContent: string,
): Promise<IMessage | null> => {
    if (!sender || !sender.userId) {
        throw new Error('Invalid sender: userId is required.')
    }

    const senderUser = await UserModel.findById(sender.userId).select(
        'email role name _id profileImage',
    )

    if (!senderUser || senderUser.role !== 'User') {
        throw new Error('Sender does not exist or does not have the user role.')
    }

    const message = new MessageModel({
        conversationId,
        sender,
        message: messageContent,
    })

    await message.save()
    return message
}

const getMessageIntoDB = async (conversationId: string) => {
    try {
        const messages = await MessageModel.find({ conversationId }).sort({
            createdAt: 1,
        })
        return messages
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

const getAllMessagesFromDB = async () => {
    try {
        const messages = await MessageModel.find().sort({
            createdAt: 1,
        })
        return messages
    } catch (error) {
        throw new Error((error as Error).message)
    }
}

export const MessageServices = {
    setMessageIntoDB,
    getMessageIntoDB,
    getAllMessagesFromDB,
}
