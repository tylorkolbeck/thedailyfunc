const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    date: {type:Date, default: Date.now},
    read: {type: Boolean, defaiult: false}
})

module.exports = mongoose.model('Message', messageSchema, 'contactMessages')