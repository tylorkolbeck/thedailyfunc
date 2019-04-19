const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
// const expressLayouts = require('express-ejs-layouts')
// const flash = require('connect-flash')
// const session = require('express-session')


// const passport = require('passport')


// Passport config
// require('./config/passport')(passport)

// const { API_PORT, CORS_ALLOW, NODE_ENV } = require('./config')

let PORT = process.env.API_PORT || 8000
let CORS_ALLOW = process.env.CORS_ALLOW

// Routes
const postRoutes = require('./api/routes/posts.js')
const messageRoutes = require('./api/routes/messages.js')
const workRoutes = require('./api/routes/work.js')
const userRoutes = require('./api/routes/user.js')

const app = express()

// DB Config
let dbURI = require('./config/keys').MongoURI


// EJS
// app.use(expressLayouts)
// app.set('view engine', 'ejs')

// BodyParser
app.use(express.urlencoded({extended: false}))

app.use(bodyParser.urlencoded({extended: false})) // parses url encoded bodies
app.use(bodyParser.json()) // parses json encoded bodies
app.use(cors())

// Express Session
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }))

// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// Connect Flash
// app.use(flash())

// Global Vars
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg = req.flash('error_msg')
//     res.locals.error = req.flash('error')
//     next()
// })

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
    res.header('Access-Control-Allow-Origin', '*') // Allow cross server requests
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization', 'poo')
    res.header('Access-Control-Allow-Headers: Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        console.log('Running Options')
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        return res.status(200).json({})
    }
    next() // Allow the request to continue to the routes
})

app.use((req, res, next) => {
    const error = new Error('Not Found')
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

app.listen(PORT || 8000, console.log(`Server Started on port ${PORT}. CORS ALLOW: ${CORS_ALLOW}`))

module.exports = app