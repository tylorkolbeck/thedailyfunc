
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()

  module.exports = {
    // CORS_ALLOW: process.env.CORS_ALLOW,
    CORS_ALLOW: 'http://localhost:3000',
    NODE_ENV: process.env.NODE_ENV,
    API_PORT: process.env.PORT
  }
}
