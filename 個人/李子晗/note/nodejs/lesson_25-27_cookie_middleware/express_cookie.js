var express = require('express');
var cookieParser = require('cookie-parser');
var app = new express();

app.use(cookieParser('key')); // 加密key

app.get('/', function(req, res) {
    console.log(req.cookies); // 普通cookie输出
    console.log(req.signedCookies); // 加密cookie输出
    res.send('hello express!');
})

// 设置cookie
app.get('/set', function(req, res) {
    /**
     * 参数1：cookie的名字
     * 参数2：cookie的值
     * 参数3：cookie的配置信息
     * 
     * 其他设置：expires,secure,path,httpOnly,singed
     * 
     * cookie加密的两种方式
     * 1.保存的时候有加密
     * 2.cookie-parser的signed属性设置为true
     */
    // res.cookie('username', 'cookie value', { maxAge: 60000, path: '/news', httpOnly: true });
    res.cookie('username', 'cookie value', { maxAge: 60000, signed: true }); // 加密设置
    res.send('设置cookie成功');
})


app.get('/news', function(req, res) {
    console.log(req.signedCookies);
    res.send('hello news!');
})

app.listen(8001, '127.0.0.1');