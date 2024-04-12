import mongoose from "mongoose";

const queryShow = async (platform, showID) => {
    const Show = mongoose.model("Show");
    const result = await Show.findOne({platform: platform, showID: showID});

    
};