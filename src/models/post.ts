import mongoose from "mongoose";

const postSchema =new mongoose.Schema({
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
const Post = mongoose.models.posts||mongoose.model("posts",postSchema);

export default Post;