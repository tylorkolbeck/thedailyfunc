// const LocalStrategy = require('passport-local').Strategy
// const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

// // Load user Model
// const User = require('../api/models/User')

// module.exports = function(passport) {
//   passport.use(
//     new LocalStrategy({
//       usernameField: 'email'
//     },
//     (email, password, done) => {
//       // Match User
//       User.findOne({email: email})
//         .then(user => {
//           // If email does not exist run done callback 
//           if (!user) {
//             return done(null, false, { message: 'That email is not registered.'})
//           }
          
//           // Match password
//           bcrypt.compare(password, user.password, (err, isMatch) => {
//             if (err) throw err
//             // Password and email match
//             if (isMatch) {
//               return done(null, user)
//             } else {
//               return done(null, false, {message: 'Incorrect password.'})
//             }
//           })

//         })
//         .catch(err => console.log(err))
//     })
//   )

//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   } )

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user)
//     })
//   })


// }