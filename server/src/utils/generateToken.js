import jwt from "jsonwebtoken"

export const genToken=async (id,res)=>
    {
      
           try {
            const token=jwt.sign({id},process.env.JWT_SEC,
                {
                    expiresIn:900000
                })
            res.cookie("token",token,
                {
                    maxAge:15*24*60*60*1000,
                    httpOnly:true,
                    sameSite:"strict"
                })
           } catch (error) {
            res.status(500).json(error.message)
           }
            
        
    }