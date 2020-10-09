var http = require('http');
var fs = require('fs');
var path = require('path'); // 用于获取后缀名
var mimeJson = require('./model/getMimeFromFile_events');
var url = require('url');
var events = require('events');

var eventEmitter = new events.EventEmitter();

http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname; // 过滤url   例如：index.html?23948729347 => index.html

    //加载默认首页
    if (pathname == '/') { pathname = '/index.html' };
    console.log(pathname);

    // 获取文件后缀名
    var extname = path.extname(pathname);

    // 过滤无效请求
    if (pathname != '/favicon.ico') {
        fs.readFile('./static/' + pathname, function(err, data) {
            console.log(1);
            if (err) {
                fs.readFile('./static/404.html', function(error, data_404) {
                    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });
                    res.write(data_404);
                    res.end();
                })
            } else {
                console.log(2);
                mimeJson.getMime(eventEmitter, extname);
                console.log(3);
                eventEmitter.once("to_mime", function(mime) { /**  用on这里不明原因会造成2此触发，改用once强制只触发一次   */
                    console.log(mime);
                    // 解析文件类型
                    res.writeHead(200, { "Content-Type": mime + ";charset='utf-8'" });
                    res.write(data);
                    console.log(4);
                    res.end();
                    console.log(5);
                });
            }
        })
    }
}).listen(8001);