
const express = require('express')

const app = express()

app.all("*", (req, res) => {
  res.send('hello world!')
})

// returns express instance
const createApp = () => (
  app
)

const createInitializer = require('./mongoose')

module.exports = {
  createApp,
  createInitializer
}
