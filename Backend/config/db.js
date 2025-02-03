import mongoose from "mongoose";



 export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://santhosh:san63011@food-cluster.2kdly.mongodb.net/?retryWrites=true&w=majority&appName=food-cluster', {
      
        serverSelectionTimeoutMS: 5000
    }).then(()=>{
        console.log("Db Connected.....");
        
    })
    .catch((e)=>console.log(e)
    )
}