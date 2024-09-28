import express from 'express'
import {
    deleteUser,
    getCurrentUser,
    login,
    register,
    updateUser,
} from './user.controller'

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/me', getCurrentUser)

router.delete('/delete/:id', deleteUser)

router.patch('/update/:id', updateUser)

export const userRouter = router
