const express = require("express");
const router = express.Router();
const passport = require('passport')

// Add this middleware to any protected route
const { ensureAuthenticated } = require('../../config/auth')

const UserController = require('../controllers/user')

// Main user view
router.get("/", UserController.mainUserView)

// Dashboard
router.get("/dashboard", ensureAuthenticated, UserController.userDashboard)

// Login View
router.get("/login", UserController.loginUser)

// Register View
router.get("/register", UserController.registerUser)

// Register Handle
router.post("/register", UserController.registerUserHandler)

// Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/api/user/dashboard', 
    failureRedirect: '/api/user/login',
    failureFlash: true
  })(req, res, next)
})

// User Logout Handle
router.get('/logout', (req, res) => {
  req.logOut()
  req.flash('success_msg', 'You are logged out.')
  res.redirect('/api/user/login')
})



module.exports = router;