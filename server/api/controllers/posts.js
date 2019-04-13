
const mongoose = require("mongoose")

// Schema
const Post = require("../models/Post.js")


exports.getAllPosts = (req, res) => {
    Post.find({})
        .then((docs) =>  {
            if (docs) {
                res.status(200).json({
                    message: 'Found The Post',
                    docs: docs
                })
            } else {
                res.status(404).json({
                    message: "Post not found in all posts."
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message: "Error Getting All Posts",
                error: err
            })
        })
}

exports.getPostById = (req, res) => {
    const postId = req.params.postId
    console.log('GETTING BY ID', req.params)
    Post.findById(postId)
        .select()
        .exec()
        .then((doc) => {
            if (doc) {
                res.status(200).json({
                    message: 'Found The Post',
                    doc
                })
            } else {
                res.status(404).json({
                    message: "Post not found. Try Again"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message: "Post not found. Try Again.",
                error: err
            })
        })
}

exports.getRecentPosts = (req, res) => {
    Post.find({})
        .limit(3)
        .then((docs) =>  {
            if (docs) {
                res.status(200).json({
                    message: 'Found The Post',
                    docs: docs
                })
            } else {
                res.status(404).json({
                    message: "Post not found in recents."
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message: "Post not found in recents",
                error: err
            })
        })
}
