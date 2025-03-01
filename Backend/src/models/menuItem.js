import mongoose from "mongoose";

const menuItemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    isAvailable:{
        type:Boolean,
        required:true,
        default:true
    }
    
});

const menuItem = mongoose.model("menuItme", menuItemSchema);
export default menuItem;