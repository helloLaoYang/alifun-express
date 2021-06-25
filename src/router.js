
const app = require('./www')

app.get('/', (request, response) => {
  response.send('欢迎使用当前系统')
})

// 兜底处理接口查询不到
app.get('*', (request, response) => {
  const { path, method } = request
  const { requestId } = request.eventContext.context
  response.send({
    success: false,
    code: -1,
    message: '此访问无效',
    errorDetail: {
      requestId,
      method,
      path,
    }
  })
})
