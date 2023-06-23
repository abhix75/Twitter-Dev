const express = require('express');
const connect = require('./config/database')
const app = express();
const Tweet = require('./models/tweet');

app.listen(3000,async ()=>{
    console.log('Server Started');
    await connect();
    console.log('MongoDb connected');

    const tweet = await Tweet.create({
        content:"MY third tweet",
        userEmail:"pp@tweeter.com"
    })
    console.log(tweet);

})