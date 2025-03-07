import jwt from "jsonwebtoken";
import User from "../models/user.model";

const authMiddleware= async(req,res,next)=>{

    try {

        const token = req.header("authorization");
        if(!token) return res.status(401).json({message:"Access denied, no token available"})

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user= await User.findById(decoded.userId).select("-password");

        if(!req.user) return res.status(401).json({message:"User not found"})
        next();

    } catch (error) {
        res.status(500).json({error: error.message, message:"Invalid token"})
    }

};

const adminMiddleware =(req,res,next)=>{
    if(req.user.role !== "admin") return res.status(403).json({message:"Access denied. Admin only"})
    next();
}

export default {authMiddleware, adminMiddleware};