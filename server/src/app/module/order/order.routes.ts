import { Router } from 'express'
import { OrderControllers } from './order.controller'

const router = Router()

router.post('/create-order/:userId', OrderControllers.createOrderController)
router.get('/my-orders/:userId', OrderControllers.getUserOrdersController)

export const OrderRouter = router
