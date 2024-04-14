import mongoose from "mongoose";

export default async () => {
    return await mongoose
        .connect(process.env.MONGODB_URI, {dbName: "Comfort-Channel"})
        .then(() => console.log("MongoDB connected!"))
        .catch((err) => console.log(`DB Connection Error: ${err.message}`));
}