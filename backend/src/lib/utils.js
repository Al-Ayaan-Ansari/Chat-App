import jwt from "jsonwebtoken";

export const genereateToken = (userId,res) =>{
        const token = jwt.sign({userId},process.env.JWT_KEY,{
            expiresIn:"7d",
        });

        res.cookie("jwt", token,{
            maxAge : 7*24*60*60*1000,
            httpOnly:true, //prevent attack XSS
            sameSite:"strict", //prevent attack CSRF
            secure: process.env.PROD_KEY !== "development",
        });
        
        return token;
}

