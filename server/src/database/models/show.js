import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
    episodeID: {
        type: String,
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
}, { _id : false });

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
}, { _id : false });

const showSchema = new mongoose.Schema({
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
    image: {
        type: String,
        default: "",
    },
    poster: {
        type: String,
        default: "",
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