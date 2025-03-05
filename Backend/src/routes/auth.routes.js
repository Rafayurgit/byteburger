import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

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