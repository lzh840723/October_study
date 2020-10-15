//1.引入模块
// var http = require('http');

//2.创建服务
//  http状态：200   ok
/**
 * req 获取url信息
 * res 浏览器返回响应信息
 */
// http.createServer(function(req, res) {
//     //  http头设置: 头部，状态码：200；文件类型 html，字符集 utf-8
//     res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

//     res.write('hello node.js!!');

//     res.end(); //结束响应
// }).listen(8001);

//3.url模块
//3.1  引入url
// var url = require('url');
//3.2  url.parse  
// console.log(url.parse("http://www.baidu.com"));


//3.3 url.format  与parse操作相反
//3.4 url.resolve  重定向？
//3.5 url获取get传值
var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    // 输入 http://localhost:8001/new?aid=123&cid=456    拿到aid和cid
    // console.log(req.url);

    //  http头设置: 头部，状态码：200；文件类型 html，字符集 utf-8
    res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });
    if (req.url != "/favicon.ico") {
        var result = url.parse(req.url, true);
        console.log(result.query.id); //获取id
        console.log(result.query.name); //获取name
        // console.log(req.url);
    }
    res.write('Hello user');

    res.end(); //结束响应
}).listen(3000);

// 4.0 改代码重启服务 
// npm -g install supervisor