const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  try {
    const token = req.body.data.token.split(" ")[1]
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
      // req.decodedUserData = decoded
      if (err) {
        // User is not authorized
        console.log(err)
      } else {
        // User is authorized
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