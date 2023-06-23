const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    userEmail: {
        type: String
    },
},{timestamps: true})

const comment = mongoose.model('comment',commentSchema);
module.exports=comment;