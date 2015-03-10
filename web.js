var express = require('express');
var compression = require('compression');
var morgan = require('morgan')
var fs = require('fs')

var app = express();
app.use(compression())

app.use(express.static(__dirname + '/public'))

app.use(function(req, res) {
	res.sendfile(__dirname + '/public/index.html');
})

app.listen(process.env.PORT || 8000);
