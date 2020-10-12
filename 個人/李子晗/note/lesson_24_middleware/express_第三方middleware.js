var express = require('express');
var bodyParser = require('body-parser');
const { nextTick } = require('process');

var app = new express();

// 配置body-parser中间件  https://www.npmjs.com/package/body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send('hello express!');
})

app.get('/news', function(req, res) {
    res.send('hello news!');
})

//
app.get('/login', function(req, res) {
    res.render('login');
})

// 用body获取post数据
app.post('/dologin', function(req, res, next) {
    console.log(req.body); //获取post提交的数据
    res.render('login');
})

app.listen(8001, '127.0.0.1');