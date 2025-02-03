import express from 'express'
import auth from '../middleware/auth.js'
import { getAllOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/oderControllers.js'
const orderRouter=express.Router()

orderRouter.post("/order",auth,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',auth,userOrders)
orderRouter.get('/allorders',getAllOrders)
orderRouter.post('/status',updateStatus)

export default orderRouter