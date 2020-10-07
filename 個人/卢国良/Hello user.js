var http = require('http');
var url = require('url');


http.createServer(function (req,res) {

    var result=JSON.stringify(url.parse(req.url,true))

       res.writeHead(200,{"Content-Type":"text/html;charset='UTF-8'"});
       console.log(JSON.parse(result).query);
       res.write('Hello user!');
       res.end();


    }).listen(3000);




