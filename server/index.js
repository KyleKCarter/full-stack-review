require('dotenv').config()
const express = require('express')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Skynet is running on ${SERVER_PORT}`))