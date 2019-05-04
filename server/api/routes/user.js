const express = require("express");
const checkAuth = require('../middleware/check-auth')
const router = express.Router();

const UserController = require('../controllers/user')

router.get('/testAuth', checkAuth, (req, res) => {
  res.send('Authorized')
})

// Register Handle
// ROUTE: /api/user/register
router.post("/register", UserController.registerUserHandler)

// Login Handle
// ROUTE: /api/user/login
router.post("/login", UserController.loginuserHandler)

// Get users posts handler
// ROUTE: /api/user/usersPosts
router.post("/usersPosts", checkAuth, UserController.getUsersPosts)




module.exports = router;