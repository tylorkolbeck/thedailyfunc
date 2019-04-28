const express = require("express");
const checkAuth = require('../middleware/check-auth')
const router = express.Router();


const AdminController = require('../controllers/admin')


// Get user info for dashboard
// ROUTE: /api/admin/userdata
router.post("/userdata",  checkAuth, AdminController.getUserData)
module.exports = router