const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweet');

app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');

    const tweet = await Tweet.create({
        content:"MY best tweet",
        userEmail:"am@tt.com"
    })
    console.log(tweet);

})