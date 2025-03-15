import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`successfully connected to database : ${conn.connection.host}`)
    } catch (error) {
        console.log(`failed to connect error : ${error}`)
    }
};