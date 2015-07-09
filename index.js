var express = require('express');
var phantom = require('phantom');
var app = express();

var formats = ['jpg', 'png', 'pdf'];

app.get('/template', function (req, res) {
  res.sendFile(__dirname + '/canvas.html');
});

app.get('/image/:format', function (req, res) {
  var format = req.params.format;
  if (formats.indexOf(format) === -1) return res.status(500).send({'error':'call /image/[format] where format is either jpg, png, or pdf'});
  phantom.create(function (ph) {
    ph.createPage(function (page) {
      page.open('http://localhost:5000/template', function () {
        page.render(__dirname + '/tmp/image.' + format, {format: format, quality: '100'}, function () {
          res.sendFile(__dirname + '/tmp/image.' + format);
          ph.exit();
        });
      });
    });
  });
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Phantom sample app listening at http://%s:%s', host, port);
});
