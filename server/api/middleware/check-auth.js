const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  // console.log('Checking auth', req.body.data.token)
  try {
    const token = req.body.data.token.split(" ")[1]
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      // req.decodedUserData = decoded
      if (err) {
        // User is not authorized
        console.log(err)
      } else {
        // User is authorized
        // req.locals.userId = decoded.userId
        console.log('DECODED', decoded.userId)
        res.locals.userId = decoded.userId
        next()
      }
    })

  } 
  catch(error) {
    return res.status(401).json({
      message: 'Auth Failed',
      error: error
    })
  }
}