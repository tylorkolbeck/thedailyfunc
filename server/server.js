// FILE FROM SERVER
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors') 
const dotenv = require('dotenv')

// Initialize dotenv
dotenv.config()

let MONGOURI

if (process.env.NODE_ENV == 'development') {
    MONGOURI = String(process.env.MONGOURI_DEV)

} else {
    MONGOURI = String(process.env.MONGOURI)
}

// Get mongo URI String
// let MONGOURI = String(process.env.MONGOURI)


// REMOVE THESE BEFORE DEPLOYMENT>  FOR PRODUCTION TESTING ONLY
let PORT = process.env.API_PORT || 8000
// let CORS_ALLOW = process.env.CORS_ALLOW
let CORS_ALLOW = 'http://localhost:3000'
let TOKEN_SECRET = process.env.TOKEN_SECRET
console.log(CORS_ALLOW)

console.log("MONGO URI - " + MONGOURI)
console.log("CORS ALLOW - " + CORS_ALLOW)
console.log("ENVIRONMENT - " + process.env.NODE_ENV)
// Routes
const postRoutes = require('./api/routes/posts.js')
const messageRoutes = require('./api/routes/messages.js')
const workRoutes = require('./api/routes/work.js')
const userRoutes = require('./api/routes/user.js')
const adminRoutes = require('./api/routes/admin.js')

const app = express()

// BodyParser
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.urlencoded({extended: false})) // parses url encoded bodies
app.use(bodyParser.json()) // parses json encoded bodies

// TODO: GET RID OF THIS CORS HELPER
app.use(cors())

//Set up mongoose connection
mongoose.connect(`${MONGOURI}`, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose Connection Error:'));
app.use('/posts', postRoutes)
app.use('/contact', messageRoutes)
app.use('/work', workRoutes)
app.use('/user', userRoutes)
app.use('/admin', adminRoutes)

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', `${CORS_ALLOW}`) // Allow cross server requests
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization', 'poo')
    res.header('Access-Control-Allow-Headers: Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        console.log('Running Options')
        res.header('Access-Control-Allow-Origin', `${CORS_ALLOW}`)
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        return res.status(200).json({})
    }
    next() // Allow the request to continue to the routes
})

app.use((req, res, next) => {
    const error = new Error('Not Found. Updated.')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message,
            requestURL: req.originalUrl,
            requestPath: req.path,
            protocol: req.protocol,
            reqQuery: req.query,
            reqRoute: req.route
        }
    })
})

app.listen(PORT || 8000, console.log(`Server Started on port ${PORT}.`))

module.exports = app
