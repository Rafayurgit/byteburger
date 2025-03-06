import jwt from "jsonwebtoken";


const authMiddleware=(req,res,next)=>{

    const token = req.header("authorization");

    if(!token) return res.status(401).json({message:"Access denied, no token available"})

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user= decode;
        next();

    } catch (error) {
        res.status(500).json({error: error.message, message:"Invalid token"})
    }

};

export default authMiddleware;