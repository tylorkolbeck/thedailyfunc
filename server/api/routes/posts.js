const express = require("express");
const router = express.Router();

const PostsController = require('../controllers/posts')
const checkAuth = require('../middleware/check-auth')

router.get("/recent", PostsController.getRecentPosts);

router.get("/", PostsController.getAllPosts);

router.post("/togglePublic", checkAuth, PostsController.togglePublic)

router.post("/newpost", checkAuth, PostsController.newPost)

router.post("/deletepost", checkAuth, PostsController.deletePost)

router.get("/:postId", PostsController.getPostById);


module.exports = router;