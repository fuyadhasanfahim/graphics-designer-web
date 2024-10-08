import { z } from 'zod'

export const createUserSchema = z.object({
    body: z.object({
        name: z.object({
            firstName: z.string().min(1, 'First name is required').optional(),
            lastName: z.string().min(1, 'Last name is required').optional(),
        }),
        username: z
            .string()
            .min(3, 'Username must be at least 3 characters')
            .optional(),
        email: z.string().email('Invalid email address'),
        phone: z.string().min(10, 'Phone number must be valid').optional(),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters')
            .optional(),
    }),
})

export const loginSchema = z.object({
    body: z.object({
        email: z.string().email('Invalid email address'),
        password: z.string().min(6, 'Password must be at least 6 characters'),
    }),
})

export const userUpdateSchemaValidation = z.object({
    name: z
        .object({
            firstName: z.string().min(1).optional(),
            lastName: z.string().min(1).optional(),
        })
        .optional(),
    username: z.string().min(1).optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string().optional(),
    profileImage: z.string().optional(),
})
