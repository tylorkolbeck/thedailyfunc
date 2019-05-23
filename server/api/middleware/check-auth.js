const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  // console.log('Checking auth', req.body.data.token)
  try {

    const token = req.body.data.token.split(" ").length > 1 ? req.body.data.token.split(" ")[1] : req.body.data.token
    // const token = req.body.data.token.split(" ")[1]

    console.log(req.body.data.token)

    

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      // console.log('-------', decoded.userId)
      res.locals.userId = decoded.userId
      // console.log('----', decoded.exp)

      if (err) {
        // User is not authorized
        if (err.message === 'jwt expired') {
          res.json({
            message: 'Token Expired'
          })
        }
        // console.log('----', err.message)
      } else if (decoded) {
        // User is authorized
        // req.locals.userId = decoded.userId
        // console.log('DECODED', decoded.userId)
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