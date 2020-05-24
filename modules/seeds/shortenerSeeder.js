const mongoose = require('mongoose') // 載入 mongoose
const Shortener = require('../shortener')
mongoose.connect('mongodb://localhost/URLshortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
    Shortener.create({ url:'https://www.google.com/', fakerUrl: 'http://localhost:3000/6y7UP'})
  console.log('mongodb connected!')
})