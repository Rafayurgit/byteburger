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