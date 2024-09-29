import { z } from 'zod'

export const orderValidationSchema = z.object({
    services: z.array(z.string()).nonempty(),
    fileFormat: z.enum(['JPEG', 'PNG']),
    background: z.enum(['Transparent', 'White']),
    path: z.enum(['Yes', 'No']),
    driveLink: z.string().url(),
    message: z.string().optional(),
})

export const getOrderSchema = z.object({
    userId: z.string(),
    ...orderValidationSchema.shape,
})
