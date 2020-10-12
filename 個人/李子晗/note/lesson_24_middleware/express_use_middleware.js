// 中间件是指匹配路由之前和之后的一些操作

var express = require('express');

var app = new express();

app.listen(8001, '127.0.0.1');

// 内置中间件 托管静态页面    http://localhost:8001/images/111.jpg
app.use(express.static('public'));

// 虚拟目录中间件   http://localhost:8001/static/images/111.jpg
app.use('/static', express.static('public'));

// 执行中间件,匹配所有的路由
app.use(function(req, res, next) {
    console.log(new Date());
    next(); // 路由继续向下匹配
});

// 匹配指定路由
app.use('/news', function(req, res, next) {
    console.log(new Date());
    next(); // 路由继续向下匹配
});


app.get('/', function(req, res) {
    res.send('你好 express!');
})

app.get('/news', function(req, res) {
    res.send('hello news!');
})

// 404匹配
app.use(function(req, res) {
    res.status(404).send('这是404');
})