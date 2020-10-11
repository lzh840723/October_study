var http = require('http');
// var router = require('./model/router');
var url = require('url');
var ejs = require('ejs');
var app = require('./model/express_router');

// 路由：是指根据不用的url，执行相应的业务逻辑
http.createServer(app).listen(8001);

app.get('/login', function (req, res) {
    console.log('login');

    ejs.renderFile('views/form.ejs',{}, function (err, data) {
        res.send(data);
    });

    res.end('login');
})
app.get('/xxx', function (req, res) {
    console.log('xxx');
    res.end('xxx');
})

// 执行登录
app.post('/dologin', function (req, res) {
    console.log(req.body); // 获取post传过来的数据
    res.send("<script>alert('ok');history.back();</script>");
})

// home page
app.get('/', function (req, res) {
    var msg = "this database info";
    ejs.renderFile('views/index.ejs', {msg:msg}, function (err, data) {
        res.send(data);
    })
})