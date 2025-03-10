import express from "express";
import Review from "../models/reviews.model.js";

const router= express.Router();

router.get("/", async(req, res)=>{
    try {
        const reviews= await Review.find();
        res.json(reviews);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

router.post("/", async(req,res)=>{
    try {
        const {name, feedback, image}= req.body;
        const newReview= new Review({name, feedback, image});
        newReview.save();
        res.status(201).json({newReview})


    } catch (error) {
        res.status(500).json({message: error.message})
    }
})