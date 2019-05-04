
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// Schema
const User = require("../models/User")
const Post = require("../models/Post")

// Register user handler
exports.registerUserHandler = (req, res) => {
  let { name, email, password, password2 } = req.body
  let errors = []
  name = name.trim()
  email = email.trim()
  password = password.trim()
  password2 = password2.trim()
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  
  // Check requied fields
  if (!name || !email || !password || !password2) {
    errors.push({
      msg: 'Please fill in all the fields.'
    })
  }

  // Check for valid email
  if (!emailRegex.test(String(email).toLowerCase())) {
    errors.push({
      msg: 'Please enter a valid email.'
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
            password,
            email: email.toLowerCase(),
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

  // If the email or password field is blank.
  if (!email || !password) {
    res.status(401).json({
      message: 'Please fill in all the fields.',
      loginSuccess: false
    })
  }

  // if email is in request
  if (email && password) {
    User.findOne({email: email.toLowerCase()})
      .then(user => {
        // If user is found in database
        if (user) {
          
          bcrypt.compare(password, user.password, (err, result) => {
            // If passwords match
            if (result) {

              // Set last login date
              User.findOneAndUpdate({_id: user._id}, {$set: {lastLogin: Date.now()}}, {upsert: true})
                .then((user)=> console.log('Logged in last update', user))

              // Find this users posts
              Post.find({userId: user._id.toString()})
                .then(posts => console.log('POSTS', posts.length))

              // generate JWT
              const token = jwt.sign(
                {
                  email: user.email,
                  userId: user._id,
                  name: user.name,
                  role: user.role,
                  lastLogin: user.lastLogin,
                  dateUserCreated: user.dateUserCreated,
                  posts: user.posts
                }, 
                process.env.TOKEN_SECRET,
                {
                  expiresIn: "3d"
                }, 
                
                (err, token) => {
                  if (err) {res.status(404).json({message: "There was an issue with your request. Please try again later"})}
                  else if (token) { res.status(200).json({token: token}) } 
                }
              ) // End jwt sign
            }
            else if (!result) { res.status(401).json({message: 'Email or password do not match.'})}
            else if (err) { res.status(401).json({message: 'There was an error with your request. Please try again later.'})}
          })// End bcrypt compare block
        }
        if (!user) {
          res.status(401).json({message: 'Email or password do not match'})
        }
      })
  }
}

exports.getUsersPosts = (req, res) => {
  let userId = res.locals.userId
  Post.find({userId: userId.toString()})
  .then(posts => {
    if (posts) {
      res.status(200).json({
        posts
      })
    } else {
      res.status(200).json(
        {
          posts: []
        }
      )
    }
    console.log('POSTS ON PROFILE PAGE', posts.length)
  })


}

