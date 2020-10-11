var fs = require('fs');
var path = require('path'); // 用于获取后缀名
var url = require('url');

// 封装方法改变res 绑定res.send()
function changeRes(res) {
    res.send = function (data) {
        res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });  // 请求头
        res.end(data);
    }
}

// 暴露的模块
var server= function(){
    var G = this;
    this._get = {};
    this._post = {};

    var app = function(req, res){
        changeRes(res);
        // 获取路由
        var pathname = url.parse(req.url).pathname;
        
        if(!pathname.endsWith('/')) {
            pathname = pathname + '/';
        }

        // 获取请求方式
        var method = req.method.toLowerCase();

        if(G['_' + method][pathname]) { // 执行post
            if (method == 'post') {
                var postStr = "";
                req.on('data', function (chunk) {
                    postStr += chunk;
                })
                req.on('end', function (err,chunk) {
                    req.body = postStr;   // 表示拿到post的值
                    console.log(postStr);
                    G['_' + method][pathname](req, res);  // 执行方法
                })
            } else {  // 执行get
                G['_' + method][pathname](req, res);  // 执行方法
            }
        } else {
            res.end('no router');
        }
    }

    app.get = function (string, callback) {
        if(!string.endsWith('/')) {
            string += '/';
        }
        if(!string.startsWith('/')) {
            string = '/' + string;
        }
        G._get[string] = callback;
    }
    app.post = function (string, callback) {
        if(!string.endsWith('/')) {
            string += '/';
        }
        if(!string.startsWith('/')) {
            string = '/' + string;
        }
        G._post[string] = callback;
    }

    return app;
}


module.exports = server();