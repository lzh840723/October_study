var http = require('http');
var router = require('./model/router');

// console.log(mimeJson.getMime('.js'));

http.createServer(function(req, res) {
    router.statics(req, res, 'static');
}).listen(8001);