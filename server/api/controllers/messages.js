
const mongoose = require("mongoose")

// Schema
const Message = require("../models/Message.js")

exports.postMessage = (req, res) => {
    const newMessage = new Message ({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        read: false
    })

    newMessage.save()
        .then(result => {
            res.status(201).json({
                success: true,
                message: 'Message Sent'
            })
        })
        .catch((err,res) => {
            const errorObj = fieldCheck(err)
            res.status(500).json({
                success: false,
                error: 'Error Sending Request',
                message: err,
                response: res
            })
        })
}