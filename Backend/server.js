import express from "express";
// import connectDb from "./src/config/db";
import cors from "cors";
import dotenv from "dotenv";
import burgerRoutes from "./src/routes/burgerRoutes.js"
import menuRoutes from "./src/routes/menuRoutes.routes.js"

dotenv.config();
// connectDb();

const app= express();
app.use(express.json());
app.use(cors());

app.use("/api/burgers", burgerRoutes);
app.use("/api/menuItem", menuRoutes );

const PORT = 8080 || process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is listining on ${PORT}`);
})



