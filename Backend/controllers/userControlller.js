import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


//login
const loginUser = async (req,res) => {
    const {email,password}=req.body;
    try {
        const user = await userModel.findOne({email})
        
        if (!user) {
            return res.json({
                success:false,
                message:"User not Exists"
            })
            
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.json({
                success:false,
                message:"Enter correct Password"
            })
            
        }
        const token=createToken(user._id)
        res.json({
            success:true,token
        })

    } catch (error) {
        res.json(
            {
                success:false,
                message:"error"
            }
        )
        
    }


}
//token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)

}
//register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //checking
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({
                success: false, message: "user Already Exists"
            })

        }
        //validator
        if (!validator.isEmail(email)) {
            return res.json({
                success: false, message: "Please enter a valid email"
            })

        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Enter a strong password" })


        }
        //hashing passowrd
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id)
        return res.json({
            success: true, token
        })

    } catch (error) {
        console.log(error);

        res.json(
            {
                success: false,
                message: "Error"
            }
        )

    }
}

//

export {
    loginUser, registerUser
}







