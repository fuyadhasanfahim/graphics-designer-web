import { Router } from "express";
import { OrderRouter } from "../module/order/order.routes";
import { userRouter } from "../module/user/user.routes";

const router = Router()

const moduleRoutes = [
    {
        route: userRouter,
        path: '/users'
    },
    {
        route: OrderRouter,
        path: '/orders'
    }
]

moduleRoutes.forEach(moduleRoute => {
    const {path, route} = moduleRoute

    return router.use(path, route)
})

export default router