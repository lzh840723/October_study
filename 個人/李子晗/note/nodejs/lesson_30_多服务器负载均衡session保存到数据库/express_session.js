var express = require('express');
var cookieParser = require('cookie-parser');
const session = require('express-session');
const { readdir } = require('fs');

var app = new express();

var app = express()
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 * 30 },
    rolling: true
}))

app.get('/', function(req, res) {
    if (req.session.userinfo) {
        res.send('hello ' + req.session.userinfo);
    } else {
        res.send('no login');
    }
})

app.get('/login', function(req, res) {
    req.session.userinfo = 'abc';
    res.send('login successfully!');
})

// 删除cookie
app.get('/loginout', function(req, res) {

    // 方法1
    // req.session.cookie.maxAge = 0; // 设置cookie的过期时间为0

    // 方法2
    req.session.destroy(function(err) {
        if (err) throw err;
    })
    res.send('loginout successfully!');
})

app.get('/news', function(req, res) {
    res.send('hello news!');
})

app.listen(8001, '127.0.0.1');