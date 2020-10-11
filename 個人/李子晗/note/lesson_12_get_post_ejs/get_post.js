var http = require('http');
var router = require('./model/router');
var url = require('url');
var ejs = require('ejs');
var fs = require('fs');

// 路由：是指根据不用的url，执行相应的业务逻辑
http.createServer(function(req, res) {
    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });  // 请求头
    // 静态web
    // router.statics(req, res, 'static');

    var pathName = url.parse(req.url).pathname;
    var data = 'I come from service';
    var list = ['111','222','333'];
    var h = '<h2>23243423<h2>';
    var method = req.method.toLowerCase();
    // console.log(method);

    if(pathName == '/login') {
        ejs.renderFile('views/form.ejs',{
        },function (err, data) {
            res.end(data);
        });
    } else if (pathName == '/dologin' && method == 'get') {
        res.end(url.parse(req.url).query);
    } else if (pathName == '/dologin' && method == 'post') {
        var postStr = "";
        req.on('data', function(chunk){
            postStr += chunk;
        });

        req.on('end', function(err, chunk){
            // res.end(postStr);
            fs.appendFile('login.txt',postStr+'\n', function(err){
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('write over');
            });
            res.end("<script>alert('ok');history.back();</script>");
        });

    }
    else {
        ejs.renderFile('views/index.ejs',{},function (err, data) {
            res.end(data);
        });
    }
}).listen(8001);