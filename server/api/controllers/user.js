
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Schema
const User = require("../models/User")

// Register user handler
exports.registerUserHandler = (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []


  // Check requied fields
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: 'Please fill in all fields.'
    })
  }

  // Check if passwords match
  if (password !== password2) {
    errors.push({
      msg: 'Passwords Do Not Match.'
    })
  }

  // Check if password length is atleast 6 chars
  if (password.length < 6 || password2.length < 6) {
    errors.push({
      msg: 'Password should be atleast 6 characters long'
    })
  }

  if (errors.length > 0) {
    res.send({ errors: errors })
  }

  if (errors.length === 0) {
    User.findOne({ email: email })
      .then((user) => {
        // If the user exists
        if (user) {
          errors.push({ msg: 'User already exists with that email.' })
          res.send({ errors: errors })
        }
        // If the user does not already exist
        else {
          //  create a new user
          const newUser = new User({
            name,
            email,
            password
          })
          // Hash Password
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err

              // Set password to hashed password
              newUser.password = hash

              // save the user
              newUser.save()
                .then((user) => {
                  res.status(200).send({errors: errors, userCreated: true})
                })
                .catch(err => console.log(err))
            })
          })
        }
      })
      .catch(err => console.log(err))
  }
}

// User login handler
exports.loginuserHandler = (req, res) => {
  const {email, password } = req.body.loginInfo 

  if (email) {
    User.findOne({email: email})
      .then(user => {
        // If user is found
        if (user) {
          // compare the password with bcrypt
          bcrypt.compare(password, user.password, (err, result) => {
            // If passwords match
            if (result) {
              // generate JWT
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user._id,
                  name: user.name,
                  role: user.role
                }, process.env.TOKEN_SECRET,
                {
                  expiresIn: "3d"
                })
              
              // send back JWT
              res.status(200).json({
                loginSuccess: true,
                token,
                userData: {
                  email: user.email,
                  userId: user._id,
                  name: user.name,
                  role: user.role
                }
              })

            // If passwords do not match
            } else {
              res.status(401).json({
                message: "Login Failed",
                loginSuccess: false
              })
              console.log('WRONG PASSWORD')
            }

            // Error with the request
            if (err) {
              console.log('ERROR LOGGIN IN ', err)
            }
          })
        }
      })
      .catch(err => res.status(404))
  } 

  if (!email || !password) {
    res.status(401).send({
      message: 'Login Failed',
      loginSuccess: false
    })
  }


}
