import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name : String,
    myFile : String
});

export default mongoose.models.posts || mongoose.model('post', postSchema)