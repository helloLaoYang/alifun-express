
const {
  createApp,
  createInitializer
} = require('../../src/index')

const initApp = async () => {
  if (typeof createInitializer === 'function') {
    await createInitializer({}, () => {})
  }
  createApp().listen(3000, (error) => {
    if (error) {
      throw error
    }
    console.log('your server run in: 127.0.0.1:3000')
  })
}

initApp()
