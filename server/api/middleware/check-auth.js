const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    console.log(req)
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
    req.decodedUserData = decoded

    next()
    } 
    catch(error) {
      return res.status(401).json({
        message: 'Auth Failed',
        error: error
      })
    }
}