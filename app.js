const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
require('./config/mongoose')
const PORT = process.env.PORT || 3000
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)


app.listen(PORT, () => {
  console.log('App is running on http://localhost:3000')
})