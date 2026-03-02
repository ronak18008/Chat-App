import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

export const protection = async (req,res,next) => {
try {
    const token = req.cookies.jwt;

    if(!token){
        return res.status(401).json({message:"Unauthorized-No token provided"});
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded) {
        return res.status(401).json({message:"Unauthorized-Invalid token"});
    }

    req.user = decoded.userId;
    next();
} catch (error) { 
    res.status(401).json({message:"Unauthorized"});
}
}