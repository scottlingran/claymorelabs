var express = require('express');
var compression = require('compression');
var morgan = require('morgan')
var fs = require('fs')

var app = express();
app.use(compression())

app.use(express.static(__dirname + '/dist'))

app.use(function(req, res) {
  res.sendfile(__dirname + '/dist/index.html');
})

app.listen(process.env.PORT || 8000);
