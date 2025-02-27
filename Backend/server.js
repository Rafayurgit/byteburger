import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app= express();

app.use(express.json());
app.use(cors());

// mongoose.connect(process.env.MONGO_URL, {
//     useNewParse:true,
//     useUnifiedTopology:true
// })
// .then(()=> console.log("MongoDb connected"))
// .catch((error)=>console.log("MongoDb connection Error", error));


// app.get("/", (req, res)=>{
//     res.send("Welcome to byteBurger api");
// });

const PORT = 8080 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is listining on ${PORT}`);
})



