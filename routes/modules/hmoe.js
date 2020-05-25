const express = require('express')
const router = express.Router()
const Shortener = require('../../modules/shortener')
const  getShortUrl = require('../../getShortUrl') 



// 設定首頁路由
router.get('/', (req, res) => {
    res.render('index')
  })

  //設定創建T路由
  router.post('/', (req, res,  next) => {
    let inputUrl = req.body.inputUrl
  
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
    
    router.get('/:id', (req, res) => {
        const id = req.params.id
        Shortener.find({ fakerUrl: id })
          .lean()
          .then(xxx => {              
            newUrl = xxx[0].url      
            res.redirect(`${newUrl}`)
          })
          .catch(error => console.log(error))
      
      })

      module.exports = router