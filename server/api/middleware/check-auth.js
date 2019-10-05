const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // console.log('Checking auth', req.body.data.token)
  try {
    // TODO: FIGURE OUT HOW TO SPLIT THE TOKEN HERE 
     // RIGHT NOT NEW POST SEND JUST THE TOKEN BUT EDIT POST SENDS THE TOKEN WITH BEARER IN FRONT OF IT
    const token = req.body.data.token


    // TESTING CONSOLE LOGS
    // console.log("[REQUEST PATH] - ", req.path)
    // console.log("[REQUEST DATA] - ", req.body.data)


    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    // console.log("USER ID - " + decoded.userId)
      
      // try {
      //   if (decoded.userId) {
      //     res.locals.userId = decoded.userId
      //   }
      // }

      // catch(error) {
      //   console.log(error)
      // }
      
      if (err) {
        console.log("[TOKEN VERIFY CATCH] - " + err)
        // User is not authorized
        if (err.message === 'jwt expired') {
          res.json({
            message: 'Token Expired'
          })
        }
        // console.log('----', err.message)
      } else if (decoded && decoded.userId) {
        // User is authorized
        // req.locals.userId = decoded.userId
        // console.log('DECODED', decoded.userId)
        console.log("User Authorized")
        next()
      }
    })

  } 
  catch(error) {
    console.log(error)
    return res.status(401).json({
      message: 'Auth Failed',
      error: error
    })
  }
}