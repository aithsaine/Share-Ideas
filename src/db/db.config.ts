import mongoose from "mongoose";


export default function connect()
{
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected',()=>console.log("database connected"))
        connection.on('error',(err)=>console.log(err))
    } catch (error) {
    console.log("connection error")    
    }
}