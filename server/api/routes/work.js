const express = require("express");
const router = express.Router();

const WorkController = require('../controllers/work')

router.get("/", WorkController.getWork);

// router.get("/", PostsController.getAllPosts);

// router.get("/:postId", PostsController.getPostById);

module.exports = router;