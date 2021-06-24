
const { Server } = require('@webserverless/fc-express')
const { createApp } = require('./src')

const server = new Server(
  createApp()
)

// http trigger entry
module.exports.handler = async (req, res, context)  => (
  server.httpProxy(req, res, context)
)
