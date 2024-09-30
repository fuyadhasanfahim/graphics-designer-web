import { Router } from 'express'
import { OrderControllers } from './order.controller'

const router = Router()

router.post('/create-order/:userId', OrderControllers.createOrderController)
router.get('/my-orders/:userId', OrderControllers.getUserOrdersController)
router.get(
    '/get-orders-by-order-id/:orderID',
    OrderControllers.getOrderByOrderId,
)
router.patch('/update-my-order/:userId', OrderControllers.updateOrder)

export const OrderRouter = router
