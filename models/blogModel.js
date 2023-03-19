import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
    head: {
        type: String,
        required: true,
        max: 255
    },
    description: {
        type: String,
        required: true,
        max: 255
    },
    user: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true,
        max: 255
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;