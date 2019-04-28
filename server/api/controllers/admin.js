const mongoose = require("mongoose")



// Schema
const User = require("../models/User.js")


exports.getUserData = (req, res) => {
  console.log('getting user data')
  User.find({}, 'role name email _id date', (err, users) => {
    if (!err) {
      res.status(200).json({
        users: users
      })
      console.log('FOUND USERS', users)
    } else {
      res.status(404)
      console.log("NO USERS")
    }
  })
}