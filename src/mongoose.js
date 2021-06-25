
const mongoose = require('mongoose')

module.exports = () => (
  new Promise((resolve, reject) => {
    console.log('开始连接数据库')
  
    const connection = () => {
      mongoose.connect('mongodb://dds-bp1osdiogbfirs7b-pub.mongodb.rds.aliyuncs.com:3717', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'admin',
        user: 'user51234515',
        pass: 'WvfkpovCh9J5QewV',
      })
    
      const db = mongoose.connection
    
      db.once('error', () => {
        
        if (reconnectionLength > 3) {
          reject(
            Error('数据库无法连接，请检查数据库配置')
          )
          return
        }
      })
    
      db.once('open', () => {
        console.log('数据库连接成功')
        resolve()
      })
  
      return db
    }
  
    return connection()
  })
)
