import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,'first name is required']
    },
    last_name:{
        type:String,
        required:[true,'last name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true,"email must be unique"]
    }
})

const User = mongoose.models.users||mongoose.model("users",userSchema)

export default User;