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
  // ES6 Template String feature : apostrophe
  return response.end(`hosgeldin -- ${request.params.adiniz}`)
})

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port ${process.env.PORT} or 3000!)
})
