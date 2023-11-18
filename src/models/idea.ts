import mongoose from "mongoose";

const ideaSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,'user id is required']
    },
    content:{
        type:String,
        required:[true,'content is required'],
    },



})
const Idea = mongoose.models.ideas||mongoose.model("ideas",ideaSchema);

export default Idea;