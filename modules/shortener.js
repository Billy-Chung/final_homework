const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortenerSchema = new Schema({
  url: {
    type: String, // 資料型別是字串   
  },
  fakerUrl:{
    type: String
  }
})
module.exports = mongoose.model('Shortener', shortenerSchema)