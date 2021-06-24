
const {
  createApp,
  createInitializer
} = require('../../src/index')

const initApp = async () => {
  await createInitializer()
  createApp().listen(3000, (error) => {
    if (error) {
      throw error
    }
    console.log(`
      your server run in: 127.0.0.1:3000
    `)
  })
}

initApp()
