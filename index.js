var express = require('express')
var nunjucks = require('nunjucks')
var app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/merhaba/:adiniz', function (request, response, next) {
  // ES6 feature apostrope??
  return response.end(`hosgeldin -- ${request.params.adiniz}`)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
