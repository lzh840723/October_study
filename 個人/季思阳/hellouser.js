var http = require('http');
var url = require('url');
var data;
var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write('Hello user!');
    data = JSON.stringify(url.parse(req.url,true));
    console.log(JSON.parse(data).query);
    res.end();
})
app.listen(3000);
