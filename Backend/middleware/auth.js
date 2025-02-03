import jwt from 'jsonwebtoken'
const middleware=async(req,res,next)=>{
    const {token}=req.headers;
    console.log(token);
    
    if (!token) {
       return res.json({
            success:false,
            message:"Not authorized"
        })
        
    }
    try {
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=token_decode.id;
        next();
    } catch (error) {
        res.json({
            success:false,
            message:"Error"
        })
        
    }
}

export default middleware;