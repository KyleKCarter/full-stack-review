require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

//controllers
const authentication = require('./controllers/authController')
const {getReviews, postReview, editReview, deleteReview} = require('./controllers/reviewsController')

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('T1000 has control of db')
    })
    .catch(error => {
        console.log(error)
    })

app.use(
    session({
        saveUninitialized: true,
        resave: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 1000
        }
    })
)

app.use(express.json())

//authentication
app.post('/auth/register', authentication.register);
app.post('/auth/login', authentication.login);
app.get('/auth/logout', authentication.lOgOuT);

//reviews
app.get('/api/reviews', getReviews)
app.post('/api/reviews', postReview)
app.put('/api/reviews/:id', editReview)
app.delete('/api/reviews/:id', deleteReview)



app.listen(SERVER_PORT, () => console.log(`Skynet is running on ${SERVER_PORT}`))