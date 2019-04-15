const mongodb = require('mongodb')

const urlDB = 'mongodb://localhost:1111/test'

mongodb.connect(urlDB,{ useNewUrlParser: true },function (err,db){
    if(err) throw err
    console.log('数据库已创建')
    db.close()
})