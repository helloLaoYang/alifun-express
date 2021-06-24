
/**
 * 处理fc http触发器错误
 * @param {d} response 
 * @param {*} context 
 * @param {*} error 
 */
exports.fcHttpError = (response, context, error) => {
  const { requestId } = context
  response.setHeader('content-type', 'application/json')
  response.send(JSON.stringify({
    code: -1,
    info: `系统错误，请联系管理员`,
    errorDetail: {
      requestId: requestId,
      message: error && error.message ? error.message : null,
    },
  }))
}