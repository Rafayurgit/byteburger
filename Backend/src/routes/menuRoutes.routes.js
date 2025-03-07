import express, { json } from "express";
import MenuItem from "../models/menuItems.js";
import {authMiddleware, adminMiddleware} from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", async(req,res)=>{
    try {
        const items= await MenuItem.find(); 1
        res.json(items);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

//create a new item 
router.post("/", authMiddleware, adminMiddleware, async(req,res)=>{
    try {
        const newItem = MenuItem(req.body);
        await newItem.save();
        res.status(201).json({newItem})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/:id", async(req,res)=>{
    try {
        const item= await MenuItem.findById(req.params.id);
        if(!item) return res.status(404).json({message: "Item not found"})
        res.json(item);
    } catch (error) {
        res.status(500),json({message: error.message})
    }
})

router.put("/:id", authMiddleware, adminMiddleware, async(req,res)=>{
    try {
        const updateItem= await MenuItem.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updateItem) return res.status(404).json({message: "Item not found"})
        res.json(updateItem);

    } catch (error) {
        res.status(500),json({message: error.message})
    }
})

router.delete("/:id", authMiddleware, adminMiddleware, async(req,res)=>{
    try {
        const deleteItem= await MenuItem.findByIdAndDelete( req.params.id);
        if(!deleteItem) return res.status(404).json({messag: "Item not found"})
        res.json({messag:"Item deleted successfully"});
    } catch (error) {
        res.status(500).json({messag: error.messag})
    }
})

export default router;