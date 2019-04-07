const express = require("express");
const router = express.Router();

const MessageController = require('../controllers/messages')

router.post("/message", MessageController.postMessage);

module.exports = router;