const express = require('express')
const jsonParser = require('body-parser').json()

const app = express()

app.use(jsonParser)

module.exports = app
