import { z } from 'zod'

const MessageValidation = z.object({
    sender: z.object({
        userId: z.string(),
        name: z.object({
            firstName: z.string(),
            lastName: z.string(),
        }),
        email: z.string().email(),
    }),
    message: z.string().min(1),
})

export default MessageValidation
