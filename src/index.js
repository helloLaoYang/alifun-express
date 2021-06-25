
const { Server, eventContext } = require('@webserverless/fc-express')
const app = require('./www')

// 加入context在request.eventContext
app.use(eventContext())

// 加载路由
require('./router')


// 使用express代理fc httpTrigger
const server = new Server(app)

// handler oauth
module.exports = {
  initializer: async (context, callback) => {
    try {
      // 连接数据库
      await require('./mongoose')()
      callback()
    } catch (error) {
      callback(error)
    }
  },
  handler: (req, res, context)  => {
    server.httpProxy(req, res, context)
  },
}