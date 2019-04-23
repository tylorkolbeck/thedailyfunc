
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
                message: "Posts not found in recents",
                error: err
            })
        })
}

exports.togglePublic = (req, res) => {
    let postId = req.body.data.postId
    Post.findById(postId)
        .exec()
        .then(post => {
            if (post) {
                Post.updateOne({_id: postId}, {$set: {public: !post.public}})
                    .then((post) => {
                        res.sendStatus(200)
                    })
                    .catch(err => {
                        console.log(err.name)
                        res.sendStatus(404)
                    })
            } 
            else console.log('post not found')
        })
        .catch(err => console.log(err))
}

exports.newPost = (req, res) => {
    // If no _id then the post is a new post
    if (!req.body.data._id) {
        let postData = {...req.body.data}
        postData._id = mongoose.Types.ObjectId()
        req.body.data._id = mongoose.Types.ObjectId()
        let newPost = new Post(postData)
        try {
            newPost.save((err, post) => {
                if (err) {
                    console.log(err)
                    res.sendStatus(401)
                }
                else {
                    res.sendStatus(200)
                }
            })
        } 

        catch(err) {
            console.log(err)
            res.sendStatus(401)
        }
    
    // If there is an id then edit a post
    } else if (req.body.data._id) {
        let editPost = {...req.body.data}
        Post.findOneAndUpdate({_id: editPost._id}, editPost, (err, Post) => {
            if (err) {
                res.sendStatus(500)
                console.log(err)
            } else {
                res.sendStatus(200)
            }
        }) 
    } else {
        console.log('Some sort of error')
        res.sendStatus(401)
    }
    
}