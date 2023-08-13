import express from "express";
import { connect } from "./config/database.js";
import TweetService from "./Service/tweet-service.js";

const app = express();

app.listen(3000, async () => {
    console.log("Server Started");

    try {
        await connect();
        console.log("MongoDb connected");

        let service = new TweetService();

        const tweet = service.create({
            content: "i #Love only #ONE #GIRL in my entire #LiFe",
        });
        console.log(tweet);
    } catch (error) {
        console.error("Error:", error);
    }
});
