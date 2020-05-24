// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
// 引用 body-parser
const bodyParser = require('body-parser')
const mongoose = require('mongoose') // 載入 mongoose
const Shortener = require('./modules/shortener')
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

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

//設定POST路由
app.post('/', (req, res) => {
  let inputUrl = req.body.inputUrl

  if (inputUrl.includes('https://') || inputUrl.includes('http://')) {
  } else {
    inputUrl = 'https://' + url
  }

  //產生短網址
  let fakerUrl = getShortUrl()  

  return Shortener.find()
    .then(check => {
      // 需要防止有重覆的網址組合出現
      let checkBox = []
      check.forEach(item => {
        checkBox.push(item.fakerUrl)
      })
      while (checkBox.includes(fakerUrl)) {
        fakerUrl = generateShortURL()
      }
      return fakerUrl
    })
    .then(() => Shortener.create({ fakerUrl :fakerUrl, url : inputUrl }))
    .then(() => res.render('show', { inputUrl, fakerUrl }))
    .catch(error => console.log(error))

})

app.get('/:id', (req, res) => {
  const id = req.params.id
  Shortener.find({ fakerUrl: id })
    .lean()
    .then(xxx => {
      thisUrl = xxx[0].url      
      res.redirect(`${thisUrl}`)
    })
    .catch(error => console.log(error))

})

function smail(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

function getShortUrl() {
  const lowerAbc = 'abcdefghijklmnopqrstuvwxyz'
  const upperAbc = lowerAbc.toUpperCase()
  const numbers = '1234567890'
  const shortUrlLength = 5

  let box = []

  box = box.concat(lowerAbc.split(''))
  box = box.concat(upperAbc.split(''))
  box = box.concat(numbers.split(''))

  let shortURL = ''
  for (let i = 0; i < shortUrlLength; i++) {
    shortURL += smail(box)
  }
  return shortURL
}

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})