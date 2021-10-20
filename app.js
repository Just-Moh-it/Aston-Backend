const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config()

const PORT = process.env.PORT || 4030
const MONGO_URL = process.env.MONGO_URL

const app = express()

// app.use(cors({ origin: [/\localhost$/, /\.mohityadav\.codes$/, "http://localhost:3684/"] , credentials :  true}))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3684');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.json())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
})) 

app.use('/users', require('./routes/userRouter'))
app.use('/api', require('./routes/animalRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/adoptionRouter'))
app.use('/api', require('./routes/uploadRouter'))

app.get('/', (req, res) => {
    res.json({ message: "Congrats! Server started. Use the front end to query..." })
})

mongoose.connect(MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, err => {
    if (err) throw error
    console.log("Connected to MongoDB")
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))