import mongoose from "mongoose";

const connectDb= async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDb connected ${conn.connection.host}`);
        

    } catch (error) {
        console.error(`Error : ${error}`);
        process.exit(1);
        
    }
}

export default connectDb;