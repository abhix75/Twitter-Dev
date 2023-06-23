const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweet');

app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');

    // const tweet = await Tweet.create({
    //     content:"MY best tweet",
    //     userEmail:"am@tt.com"
    // })

    const Tweets = await Tweet.findById('649594a52d7c258e290f5ae1');
                    Tweets.userEmail = 'bal@t.com';
                    await Tweets.save();
                    console.log(Tweets)

})