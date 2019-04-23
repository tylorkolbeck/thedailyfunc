const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, required: true, auto: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    tags: {type: Array},
    description: {type: String},
    date: {type:Date, default: Date.now},
    mainCat: {type: String, required: true},
    postCardImg: {type: String, required: true},
    imgThumb: {type: String, required: true},
    body: {type: String, required: true},
    public: {type: Boolean, default: false}
})

module.exports = mongoose.model('Post', postSchema)