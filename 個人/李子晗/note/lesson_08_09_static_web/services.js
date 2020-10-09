var http = require('http');
var fs = require('fs');
var path = require('path'); // 用于获取后缀名
var mimeModel = require('./model/getmime');
var mimeJson = require('./model/getMimeFromFile');
var url = require('url');

// console.log(mimeJson.getMime('.js'));

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname; // 过滤url   例如：index.html?23948729347 => index.html

    //加载默认首页
    if (pathname == '/') pathname = 'index.html';

    // 获取文件后缀名
    var extname = path.extname(pathname);

    // 过滤无效请求
    if (pathname != '/favicon.ico') {
        // console.log(pathname);
        fs.readFile('./static/' + pathname, function(err, data) {
            if (err) {
                fs.readFile('./static/404.html', function(error, data_404) {
                    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });
                    res.write(data_404);
                    res.end();
                })
            } else {
                var mime = mimeJson.getMime(extname); // 解析文件类型
                // console.log(mime);
                res.writeHead(200, { "Content-Type": mime + ";charset='utf-8'" });
                res.write(data);
                res.end();
            }
        })
    }
}).listen(8001);