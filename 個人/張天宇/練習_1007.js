//引入http模块
var http = require('http');
var url = require('url');

/*
    req 获取url信息 （requrest）
    res 浏览器返回相应信息 （response）
*/

http.createServer(function (req,res){
    //发送http头部
    //http状态值：200 OK
    //十日至http头部，状态码是200，文件类型是html，字符集是utf-8

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    if (req.url != '/favicon.ico') {

        var result = url.parse(req.url, true);
        var path = result.path;

        if (path == '/user'){

            res.write('{"name":"USER"}');

        }else{

            var query = result.query;
            var str = JSON.stringify(query);
            str = JSON.parse(str);

            res.write("Hello "+str.name+"!");
            console.log(str);

        }

        res.end();
    }
}).listen(3000);