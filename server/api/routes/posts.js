const express = require("express");
const router = express.Router();

const PostsController = require('../controllers/posts')

router.get("/recent", PostsController.getRecentPosts);

router.get("/", PostsController.getAllPosts);

router.get("/:postId", PostsController.getPostById);

module.exports = router;