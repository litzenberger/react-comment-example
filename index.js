var fs = require('fs');

var express = require('express');
var app = express();

var comments = require('./comments');

app.use('/', express.static(__dirname));
app.use(express.bodyParser());

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
  fs.writeFile('./comments.json', JSON.stringify(comments), function (err) {
  if (err) throw err;
  console.log("It's saved");
});
});




console.log("Server started at localhost:3000")
app.listen(3000);