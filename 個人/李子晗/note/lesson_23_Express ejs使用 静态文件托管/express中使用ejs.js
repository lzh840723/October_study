// 安装ejs以后不用再引用，可以直接用
var express = require('express');

var app = express(); // new 可以不写

// 配置模板引擎   默认路径是/views
app.set('view engine', 'ejs');
// 设置模板读取路径
// app.set('views',__dirname+"/static");

// 静态文件托管
app.use(express.static('public'));

// 虚拟目录设置  http://localhost:8001/static/images/48053793_p0_master1200.jpg
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/news', function(req, res) {
    var arr = ['111', '222', '333'];
    res.render('news', { list: arr });
})

app.listen(8001, '127.0.0.1');