const express = require("express");
const connect = require("./config/database");
const app = express();
const Tweet = require("./models/tweet");
const Hashtag = require("./models/Hashtag");
const { HashtagRepository } = require("./repository");

app.listen(3000, async () => {
  console.log("Server Started");
  await connect();
  console.log("MongoDb connected");

  const repo = new HashtagRepository();
  const response = await repo.findByName(['Python']);
  console.log(response);
});
