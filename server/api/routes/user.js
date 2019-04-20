const express = require("express");
const checkAuth = require('../middleware/check-auth')
const router = express.Router();

// const { ensureAuthenticated } = require('../../config/auth')

const UserController = require('../controllers/user')

router.get('/testAuth', checkAuth, (req, res) => {
  res.send('Authorized')
  console.log(req.decodedUserData)
})

// Register Handle
// ROUTE: /api/user/register
router.post("/register", UserController.registerUserHandler)

// Login Handle
// ROUTE: /api/user/login
router.post("/login", UserController.loginuserHandler)

module.exports = router;