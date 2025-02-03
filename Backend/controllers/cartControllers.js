import userModel from '../models/userModel.js'



//add

const addToCart=async(req,res)=>{

console.log(req.body.userId);
const{userId}=req.body;

   



   

    try {

        let userData = await userModel.findById(userId  );





console.log(userData);


 let cartData= await userData.cartData;

 
console.log(req.body.itemId);

if (!cartData[req.body.itemId]) {
     cartData[req.body.itemId]=1

           

        }

        else{

            cartData[req.body.itemId]+=1

           

        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData})

        res.json(

            {

                success:true,message:"Added item to cart"

            }

        )

    } catch (error) {

        console.log(error);

       

        res.json(

            {

                success:false,message:"Error"

            }

        )

       

    }

   

}



//remove

const remove=async(req,res)=>{

    try {

        let userData=await userModel.findById(req.body.userId);

        let cartData=await userData.cartData;

        if (cartData[req.body.itemId]>0) {

            cartData[req.body.itemId]-=1

            if (userData.cartData[itemId] === 0) {

                delete userData.cartData[itemId];

            }

           

        }

        await userModel.findByIdAndUpdate(req.body.userId,cartData)

        res.json(

            {

                success:true,message:"Removed item to cart"

            }

        )

       

    } catch (error) {

        res.json(

            {

                success:false,message:error.message

            }

        )

       

    }



}



//fetch user cart

const getCart=async(req,res)=>{

    try {

        let userData=await userModel.findById(req.body.userId);

        let cartData= userData.cartData;

        res.json(

            {

                success:true,cartData:cartData

            }

        )

       

       

    } catch (error) {

        res.json(

            {

                success:false,message:error.message

            }

        )

       

    }



}



export {addToCart,remove,getCart}