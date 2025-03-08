import mongoose from "mongoose";

const reviewSchema= mongoose.Schema({
    name:{type:String, required:true},
    feedback:{type:String, required:true},
    image:{type:String, default:""}
}, {timeStamps:true});

const Review = mongoose.model("Review", reviewSchema);
export default Review;