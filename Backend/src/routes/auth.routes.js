import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const router= express.Router();

router.post("/register" , async(req,res)=>{
    try {
        const {name,email, password }= req.body;
        const existingUser= await User.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exist"});
        
        const newUser= new User({name,email, password});
        await newUser.save();

        res.status(201).json({message:"New user registered successfully"})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

router.post("/login", async(req,res)=>{
    try {
        const {email, password}= req.body;
        const user= await User.findOne({email});

        if(!user) return res.status(400).json({message:"Invalid credentials"})
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message:"Incalid credentials"});

        const token = jwt.sign({userId : user._id}, process.env.JWT_SECRET, {expiresIn: "24h"});
        res.json({token})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


export default router;