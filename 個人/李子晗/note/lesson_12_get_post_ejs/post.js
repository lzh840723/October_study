var http = require('http');
var router = require('./model/router');
var url = require('url');
var ejs = require('ejs');

// 路由：是指根据不用的url，执行相应的业务逻辑
http.createServer(function(req, res) {
    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });  // 请求头
    // 静态web
    // router.statics(req, res, 'static');

    var pathName = url.parse(req.url).pathname;
    var data = 'I come from service';
    var list = ['111','222','333'];
    var h = '<h2>23243423<h2>';

    if(pathName == '/login') {
        ejs.renderFile('views/form_post.ejs',{
        },function (err, data) {
            res.end(data);
        });
    } else if (pathName == '/dologin') {
        res.end('dologin');
    }
    else {
        ejs.renderFile('views/index.ejs',{},function (err, data) {
            res.end(data);
        });
    }
}).listen(8001);