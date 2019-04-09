const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    about: {type: String, required: true},
    tech: {type: Array},
    description: {type: String},
    img: {type: String, required: true},
    imgThumb: {type: String, required: true},
    url: {type: String, required: true}
})

module.exports = mongoose.model('Work', workSchema, 'work')