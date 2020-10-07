var http = require("http");
var url = require("url");

http.createServer(function(req,res){

    res.writeHead(200,{"content-Type":"text/html.charset='utf-8'"})

    if (req.url != '/favicon.ico') {

        let query = url.parse(req.url,true).query;
        let pathname = url.parse(req.url,true).pathname;

        if (pathname !== "/"){

            const p = '{"name":"' + pathname.substr(1).toUpperCase() + '"}';
           res.write(p);

        }else{

            res.write("Hello user!");

            let str = JSON.stringify(query);
            let str2 = JSON.parse(str);
            const str3 = {
                name : str2.name,
                id : str2.id
            }

            console.log(str3);

        }

    }

    res.end();

}).listen(3000);
