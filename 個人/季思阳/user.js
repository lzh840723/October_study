var http = require('http');
var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write('"name":"USER"');
    res.end();
})
app.listen(3000);
