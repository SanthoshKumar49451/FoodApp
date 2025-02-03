import { addToCart,remove,getCart } from "../controllers/cartControllers.js";
import express from 'express'
import middleware from "../middleware/auth.js";

const cartRouter=express.Router()
cartRouter.post("/add",middleware,addToCart)
cartRouter.post("/remove",middleware,remove)
cartRouter.post("/get",middleware,getCart)

export default cartRouter