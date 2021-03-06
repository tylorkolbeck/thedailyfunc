const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    dateUserCreated: {
        type: Date,
        default: Date.now
    },
    posts: {
        type: Array
    },
    lastLogin: {
        type: Date
    }
})

// const User = mongoose.model('User', userSchema, 'users')

// module.exports = User

module.exports = mongoose.model('User', userSchema)