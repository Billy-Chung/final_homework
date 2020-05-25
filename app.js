// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
// 引用 body-parser
const bodyParser = require('body-parser')
const mongoose = require('mongoose') // 載入 mongoose
const Shortener = require('./modules/shortener')
const routes = require('./routes')

mongoose.connect('mongodb://localhost/URLshortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)



//設定不創建，讀取路由



// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})