//1.0 node中，模块分为核心模块和文件模块
//核心模块：http URL Fs 。可以直接使用。
//文件模块：自定义模块

//2.0 CommonJS(nodejs) 自定义模块
// var http = require("http");
// var str = require("./lesson_03_exports");

// var app = http.createServer(function(req, res) {

//     res.writeHead(200, { "Content-Type": "text/html;charset='utf-8'" });

//     console.log(str);
//     res.write('Hello nodejs');

//     res.end(); //结束响应

// }).listen(8002, '127.0.0.1')

//3.0
var tools = require('./lesson_03_tools');
// console.log(tools.tools.add(1, 4));
console.log(tools.add(1, 4));
console.log(tools.sayHello());

//3.1 当默认目录下没有时，在node_module文件夹下寻找
//3.2 js后缀名可不加
//3.3 npm init
//3.4 packege.json   npm  init