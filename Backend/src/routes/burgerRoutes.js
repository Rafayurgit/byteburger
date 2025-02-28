import express,{ Router } from "express";

const router=Router();

router.get("/", (req,res)=>{
    res.json({Message:"Welcome to byteBurger API"});
})

export default router;
