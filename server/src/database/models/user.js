import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
    episodeID: {
        type: String,
        required: true,
    },
    seasonID: {
        type: String,
        required: true,
    },
    lastWatched: {
        type: Date,
        default: Date.now,
    },
}, { _id : false });

const showSchema = new mongoose.Schema({
    show_id: mongoose.Schema.Types.ObjectId,
    selectedEpisodes: {
        type: [episodeSchema],
        default: [],
    },
    lastWatched: {
        type: Date,
        default: Date.now,
    }
}, { _id : false });

const userSchema = new mongoose.Schema({
    _id: String,
    username: {
        type: String,
        default: "",
    },
    channel: {
        type: [showSchema],
        default: [],
    },
    settings: {
        type: Object,
        default: {},
    }
});

export default mongoose.model("User", userSchema);