var http = require('http');
var router = require('./model/router');
var url = require('url');

// console.log(mimeJson.getMime('.js'));

// 路由：是指根据不用的url，执行相应的业务逻辑
http.createServer(function(req, res) {
    // 静态web
    // router.statics(req, res, 'static');
    console.log(req.url);

    var pathName = url.parse(req.url).pathname;
    if(pathName == '/login') {
        res.end('login');
    }else if (pathName == '/register') {
        res.end('register');
    }else if (pathName == '/oder') {
        res.end('oder');
    } else {
        res.end('index');
    }
}).listen(8001);