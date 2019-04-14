const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Routes
const postRoutes = require('./api/routes/posts.js')
const messageRoutes = require('./api/routes/messages.js')
const workRoutes = require('./api/routes/work.js')

const app = express()
const PORT = 9292

app.use(bodyParser.urlencoded({extended: false})) // parses url encoded bodies
app.use(bodyParser.json()) // parses json encoded bodies
app.use(cors())

//Set up mongoose connection
mongoose.connect('mongodb://localhost/thedailyfunc', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('connected to mongo database')
// });

app.use('/api/posts', postRoutes)
app.use('/api/contact', messageRoutes)
app.use('/api/work', workRoutes)

app.use((req, res, next) => {
    console.log('Running Request')
    res.header('Access-Control-Allow-Origin', 'https://thedailyfunc.com') // Allow cross server requests
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization', 'poo')
    res.header('Access-Control-Allow-Headers: Content-Type')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH, OPTIONS');
    
    if (req.method === 'OPTIONS') {
        console.log('Running Options')
        res.header('Access-Control-Allow-Origin', 'https://thedailyfunc.com')
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



app.listen(PORT || process.env.PORT, () => console.log('Listening on', process.env.PORT ))

module.exports = app