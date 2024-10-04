import { Router } from 'express'
import { OrderRouter } from '../module/order/order.routes'
import { userRouter } from '../module/user/user.routes'
import { MessageRouter } from '../module/message/message.routes'

const router = Router()

const moduleRoutes = [
    {
        route: userRouter,
        path: '/users',
    },
    {
        route: OrderRouter,
        path: '/orders',
    },
    {
        route: MessageRouter,
        path: '/messages',
    },
]

moduleRoutes.forEach(moduleRoute => {
    const { path, route } = moduleRoute

    return router.use(path, route)
})

export default router
