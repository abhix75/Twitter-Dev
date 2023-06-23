const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweet');
const TweetRepo= require('./repository/tweet-repository');
const TweetRepository = require('./repository/tweet-repository');
const Comments= require('./models/comments')
app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');

    // const tweet = await Tweet.create({
    //     content:"MY best tweet",
    //     userEmail:"am@tt.com"
    // })

    // const Tweets = await Tweet.findById('649594a52d7c258e290f5ae1');
    //                 Tweets.userEmail = 'bal@t.com';
const TweetRepo = new TweetRepository();

const tweet = await TweetRepo.create({content:'Tweet with comment Schema'});
console.log(tweet);
const comment = await Comments.create({content:'New comment'});
tweet.comments.push(comment)
await tweet.save();
console.log(tweet)

})