// npm install express nodemon mongoose dotenv cors
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// npm install bcrypt
// const bcrypt = require('bcrypt');

app.use(bodyParser.json())

const mongURI = "mongodb+srv://KaNology:KaNology@cluster0.m9ezz.mongodb.net/mytable?retryWrites=true&w=majority"

mongoose.connect(mongURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Connect Success")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})

app.use('/api', require('./api/user'))
app.use('/api', require('./api/scene'))
app.use('/api', require('./api/warning'))
app.use('/api/action', require('./api/action'));

app.listen(3000, () => {
    console.log("Listening on 3000")
})


// npm run start: to run server