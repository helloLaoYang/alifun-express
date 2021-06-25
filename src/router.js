
const app = require('./www')

app.get('/', (request, response) => {
  response.send('欢迎访问微信接口项目')
})

// 兜底处理接口查询不到
app.get('*', (request, response) => {
  const { path, method } = request
  const { requestId } = request.eventContext.context
  response.send({
    success: false,
    code: -1,
    message: '未定义的接口',
    errorDetail: {
      requestId,
      method,
      path,
    }
  })
})
