import express, { json } from "express";
import menuItem from "../models/menuItem";

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const items= await menuItem.find();
        res.json(items);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//create a new item 
router.post("/", async(req,res)=>{
    try {
        const newItem = menuItem(req.body);
        await newItem.save();
        res.status(201).json({newItem})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const item= await menuItem.findById(req.params.id);
        if(!item) return res.status(404).json({message: "Item not found"})
        res.json(item);
    } catch (error) {
        res.status(500),json({message: error.message})
    }
})