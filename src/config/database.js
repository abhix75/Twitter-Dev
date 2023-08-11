import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1/twitter_Dev');
        console.log("MongoDb connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
