import mongoose from "mongoose";

export const dbConnection=()=>{
    try {
        const Conn = mongoose.connect(process.env.MONGO_CLIENT)
        Conn && console.log("MongoDB is connected successfully")
    } catch (error) {
        next(error)
    }
}