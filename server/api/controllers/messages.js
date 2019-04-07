
const mongoose = require("mongoose")

// Schema
const Message = require("../models/Message")

exports.postMessage = (req, res) => {
    console.log(req.doc)
    // Message.post()
    //     .then((doc) => {
    //         console.log(doc)
    //     })
    //     .catch(err => {
    //         res.status(500).json({
    //             message: 'Error',
    //             err: err
    //         })
    //     }) 
}