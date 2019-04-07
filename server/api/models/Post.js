const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    author: {type: String, required: true},
    tags: {type: Array},
    description: {type: String},
    date: {type:Date, default: Date.now},
    mainCat: {type: String, required: true},
    postCardImg: {type: String, required: true},
    body: {type: String, required: true}
})

module.exports = mongoose.model('Post', postSchema)