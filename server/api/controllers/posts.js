
const mongoose = require("mongoose")

// Schema
const Post = require("../models/Post.js")
const User = require("../models/User.js")

// Get all the posts and order by newest
exports.getAllPosts = (req, res) => {
    console.log("GETTING ALL POSTS")
    Post.find({}).sort({date: -1})
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

// Get a post by id to show full post
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
                    message: "Post not found. Try Again -"
                })
            }
        })
        .catch((err)=> {
            res.status(500).json({
                message: "Post not found. Try Again. -",
                error: err
            })
        })
}


// Get recent posts and limit to last 3 posts
exports.getRecentPosts = (req, res) => {
    Post.find({}).sort({ date: -1 })
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

/**
 * Toggles a post between public and private.
 * @param {string} req.body.data.postId The post id for the post being toggled.
 * @return {int} 404 if the post was not found. 200 if toggle is successful.
 * 503 if there was an error toggling the post
 * Updated: 5OCT19 - Tylor Kolbeck
 */
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
                        res.sendStatus(503)
                    })
            } 
            else {
                res.sendStatus(503)
            }
        })
        .catch(err => {
            res.sendStatus(404)
        })
}




exports.newPost = (req, res) => {
    console.log(res.locals.userId)
    // The user who wrote the posts userId
    let userId = res.locals.userId
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
                    console.log("Post Id: ", post._id) 
                    User.findOneAndUpdate({"_id": userId}, {$push: {"posts": post._id }})
                        .then((user) => {
                            console.log('User Updated', post._id, 'USER', user)
                        })
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

// delete a post
exports.deletePost = (req, res) => {
    Post.deleteOne({_id: req.body.data.postId}, (err) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
}