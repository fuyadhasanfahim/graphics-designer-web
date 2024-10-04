import { RequestHandler } from 'express'
import { MessageServices } from './message.service'

const setMessage: RequestHandler = async (req, res) => {
    try {
        const { conversationId, sender, message } = req.body

        if (!sender || !sender.userId) {
            return res.status(400).json({
                success: false,
                message: 'Sender information is missing or invalid.',
            })
        }

        const newMessage = await MessageServices.setMessageIntoDB(
            conversationId,
            sender,
            message,
        )

        res.status(201).json({
            success: true,
            message: 'Message set successfully.',
            data: newMessage,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
            error,
        })
    }
}

const getMessage: RequestHandler = async (req, res) => {
    try {
        const { conversationId } = req.params

        const data = await MessageServices.getMessageIntoDB(conversationId)

        res.status(200).json({
            success: true,
            message: 'Messages fetched successfully.',
            messages: data,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
            error: error as Error,
        })
    }
}

const getAllMessages: RequestHandler = async (req, res) => {
    try {
        const data = await MessageServices.getAllMessagesFromDB()

        res.status(200).json({
            success: true,
            message: 'Messages fetched successfully.',
            messages: data,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message,
            error: error as Error,
        })
    }
}

export const MessageControllers = {
    setMessage,
    getMessage,
    getAllMessages,
}
