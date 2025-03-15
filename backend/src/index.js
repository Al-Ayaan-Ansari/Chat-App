import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import {app,io,server} from "./lib/socket.js";
dotenv.config();
let PORT = process.env.PORT;
const __dirname = path.resolve();
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))
app.use(express.json({ limit: "10mb" }));

app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })
}

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
    connectDB();
})

