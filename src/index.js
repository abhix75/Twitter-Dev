const express = require("express");
const connect = require("./config/database");
const app = express();
const Tweet = require("./models/tweet");
const Hashtag = require("./models/Hashtag");
const { TweetRepository } = require("./repository");
const TweetService = require('./Service/tweet-service')

app.listen(3000, async () => {
  console.log("Server Started");
  await connect();
  console.log("MongoDb connected");

let service = new TweetService();

const tweet = service.create({
  content: "#coding is so #excited and #fun"
})
console.log(tweet);
});
