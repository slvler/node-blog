import mongoose from "mongoose";

const { Schema } = mongoose;

const aboutSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 255
    },
    description: {
        type: String,
        required: true,
        max: 255
    },
    mission: {
        type: String,
        required: true,
        max: 255
    },
    vision: {
        type: String,
        required: true,
        max: 255
    },
    picture: {
        type: String,
        required: true,
        max: 255
    }
});
const About = mongoose.model('About', aboutSchema);
export default About;