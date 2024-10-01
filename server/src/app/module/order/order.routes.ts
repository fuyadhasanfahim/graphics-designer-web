import { Router } from 'express'
import { OrderControllers } from './order.controller'

const router = Router()

router.post('/create-order/:userId', OrderControllers.createOrderController)

router.get('/my-orders/:userId', OrderControllers.getUserOrdersController)

router.get(
    '/get-orders-by-order-id/:orderId',
    OrderControllers.getOrderByOrderId,
)

router.patch('/update-my-order/:orderId', OrderControllers.updateOrder)

router.get('/get-all-orders', OrderControllers.getAllOrders)

export const OrderRouter = router
