import { Router } from 'express'
import { MessageControllers } from './message.controller'
import validateMessage from '../../middleware/validateMessage'

const router = Router()

router.post('/set-message', validateMessage, MessageControllers.setMessage)

router.get('/get-message/:conversationId', MessageControllers.getMessage)

router.get('/get-all-messages', MessageControllers.getAllMessages)

export const MessageRouter = router
