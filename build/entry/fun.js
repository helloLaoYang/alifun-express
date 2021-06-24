
const { Server } = require('@webserverless/fc-express')

const {
  createApp,
  createInitializer
} = require('../../src/index')

const app = createApp()

const server = new Server(app)

module.exports.handler = async (req, res, context)  => {
  server.httpProxy(req, res, context)
}

module.exports.initializer = createInitializer
