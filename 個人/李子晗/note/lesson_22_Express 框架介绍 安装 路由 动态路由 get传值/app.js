var express = require('express');

var app = new express();

app.listen(8001, '127.0.0.1');

app.get('/', function (req, res) {
    res.send('hello express!');
})

app.get('/news', function (req, res) {
    res.send('hello news!');
})

app.get('/login', function (req, res) {
    res.send('hello login!');
})
app.get('/register', function (req, res) {
    res.send('hello register!');
})

// 动态路由
app.get('/newscontent/:aid', function (req, res) {
    // 获取动态路由的传值
    var aid = req.params.aid;

    res.send('hello newscontent! aid=' + aid);
})

// get传值   http://localhost:8001/product?aid=123
app.get('/product', function (req, res) {
    var aid = req.query.aid;

    res.send('product aid='+aid);
})




