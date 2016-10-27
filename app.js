var express = require('express');
var expressFavicon = require('express-favicon')
var app = express();

app.use(express.static('public'));
app.use(expressFavicon('favicon.ico'))

app.use('/', function (req, res){
	if(req.method == 'GET'){
		res.send('hello')
	}
})

// get, use'un özelleştirilmiş hali
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});