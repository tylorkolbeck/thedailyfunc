
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')


// Schema
const User = require("../models/User")

// Dashboard view
exports.userDashboard = (req, res) => {
  res.render('dashboard', {
    name: req.user.name
  })
}

// Main user view with login or register option
exports.mainUserView = (req, res) => {
  res.render('userMain')
}

// Login user view
exports.loginUser = (req, res) => {
    res.render('login')
}


// Register user view
exports.registerUser = (req, res) => { 
  res.render('register')
}

// Register user handler
exports.registerUserHandler = (req, res) => { 
  const { name, email, password, password2 } = req.body
  let errors = []

  // Check requied fields
  if (!name || !email || !password || !password2) {
    errors.push({ 
      msg: 'Please Fill In All Fields.'
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

  // If there are errors then pass them to ejs
  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    // validation passed
    User.findOne({email: email})
      .then(user => {
        // User exists
        if (user) {
          errors.push({msg: 'User already exists with that email.'})
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          })
        } else {
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
                  req.flash('success_msg', 'You are now registered.')
                  res.redirect('/api/user/login')
                })
                .catch(err => console.log(err))
            })
          })
          console.log(newUser)
          // res.send('hello')
        }
      })
  }

  
}
