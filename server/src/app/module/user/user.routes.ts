import express from 'express'
import {
    deleteUser,
    getAllUsersController,
    getCurrentUser,
    getUser,
    login,
    register,
    updateUser,
} from './user.controller'

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.get('/me', getCurrentUser)

router.get('/get-user/:userId', getUser)

router.delete('/delete/:id', deleteUser)

router.patch('/update/:id', updateUser)

router.get('/all-users', getAllUsersController)

export const userRouter = router
