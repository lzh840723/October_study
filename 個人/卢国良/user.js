var http = require('http');


http.createServer(function (req,res) {

    res.writeHead(200,{"Content-Type":"text/html;charset='UTF-8'"});
    res.write('"name":"USER"');
    res.end();


}).listen(3000);