import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name:{ type:String ,required:true},
    email:{type: String, required:true, unique:true},
    password:{type:String, required:true}

}, {timestamps:true});

userSchema.pre("save, async (next) {
    if(!this.isModified("password")) return next();
    const hash=await bcrypt.hash(this.password, 10);
    next();
})

const User= mongoose.model("User", userSchema);
export default User;