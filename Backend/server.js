import express from "express";

const app= express();
const PORT = 8080 || process.env.port;
app.listen(PORT, ()=>{
    console.log(`Server is listining on ${PORT}`);
})