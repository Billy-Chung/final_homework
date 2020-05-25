const Shortener = require('../shortener')
const db = require('../../config/mongoose')

db.once('open', () => {
    Shortener.create({ url:'https://www.google.com/', fakerUrl: 'http://localhost:3000/6y7UP'})
  console.log('mongodb connected!')
})

