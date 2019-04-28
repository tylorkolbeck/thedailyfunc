const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
// const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

// dotenv.config()
// const { API_PORT, CORS_ALLOW, NODE_ENV } = require('./config')


// REMOVE THESE BEFORE DEPLOYMENT>  FOR PRODUCTION TESTING ONLY
let PORT = process.env.API_PORT || 8000
let CORS_ALLOW = process.env.CORS_ALLOW
let TOKEN_SECRET = process.env.TOKEN_SECRET

// Routes
const postRoutes = require('./api/routes/posts.js')
const messageRoutes = require('./api/routes/messages.js')
const workRoutes = require('./api/routes/work.js')
const userRoutes = require('./api/routes/user.js')

const app = express()

// DB Config
// let dbURI = require('./config/keys').MongoURI

// BodyParser
app.use(express.urlencoded({extended: false}))

app.use(bodyParser.urlencoded({extended: false})) // parses url encoded bodies
app.use(bodyParser.json()) // parses json encoded bodies
app.use(cors())

//Set up mongoose connection
mongoose.connect('mongodb://localhost/thedailyfunc', {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose Connection Error:'));

app.use('/api/posts', postRoutes)
app.use('/api/contact', messageRoutes)
app.use('/api/work', workRoutes)
app.use('/api/user', userRoutes)

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
    const error = new Error('Not Found -')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

app.listen(PORT || 8000, console.log(`Server Started on port ${PORT}. CORS ALLOW: ${CORS_ALLOW}. TOKEN_SECRET ${TOKEN_SECRET}`))

module.exports = app