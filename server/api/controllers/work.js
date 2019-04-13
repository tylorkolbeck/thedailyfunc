
const mongoose = require("mongoose")

// Schema
const Work = require("../models/Work.js")


exports.getWork = (req, res) => {
    Work.find({})
        .then((docs) =>  {
            if (docs) {
                res.status(200).json({
                    message: 'Found Work',
                    docs: docs
                })
            } else {
                res.status(404).json({
                    message: "Work not found"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message: "Error Getting All Work",
                error: err
            })
        })
}