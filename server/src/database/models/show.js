import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
    episodeID: {
        type: Number,
        required: true,
    },
    episodeNum: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "",
    },
    synopsis: {
        type: String,
        default: "",
    }
});

const seasonSchema = new mongoose.Schema({
    seasonID: {
        type: String,
        required: true,
    },
    seasonNum: {
        type: Number,
        required: true,
    },
    episodes: {
        type: [episodeSchema],
        default: [],
    },
});

const showSchema = new mongoose.Schema({
    _id: String,
    platform: {
        type: String,
        required: true,        
    },
    showID: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,        
    },
    synopsis: {
        type: String,
        default: "",
    },
    seasons: {
        type: [seasonSchema],
        default: [],
    },
});

export default mongoose.model("Show", showSchema);