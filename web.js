
var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var rfile = new Buffer( fs.readFileSync('./index.html','utf8'));
   // response.send(rfile.toString("utf-8",22,40));
    response.send(rfile.toString("utf-8",43,70));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
