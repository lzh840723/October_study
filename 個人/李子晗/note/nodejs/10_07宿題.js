// 1.
// var http = require('http');
// var url = require('url');
// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
//     if (req.url != "/favicon.ico") {
//         var result = url.parse(req.url, true);
//         console.log(result.query.id); //获取id
//         console.log(result.query.name); //获取name
//     }
//     res.write('Hello user');

//     res.end(); //结束响应
// }).listen(3000);

// 2.
var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
    if (req.url != "/favicon.ico") {
        var result = url.parse(req.url, true);
        var path = result.path;
        var name = path.replace('/', "");
        name = name.toUpperCase();
    }
    res.write('{"name":"' + name + '"}"');

    res.end(); //结束响应
}).listen(3000);