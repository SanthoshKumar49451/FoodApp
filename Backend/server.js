import express from "express";
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoute.js";



//app config
const app=express();
const port=process.env.PORT||4000;
//middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use("/api/order",orderRouter)
//db connection
connectDb()

//Food routes
app.use("/api/food",foodRouter)




app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(port)


