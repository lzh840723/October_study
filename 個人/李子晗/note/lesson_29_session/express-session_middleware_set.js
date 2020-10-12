const express = require('express');
const session = require('express-session');

var app = express()

// set session middleware
app.set('trust proxy', 1) 
app.use(session({
  secret: 'keyboard cat',     // session签名，可以随便写
  name : 'name id',           // 保存在本地的名字   可省略
  resave: false,              // 强制保存session  默认true,建议false
  saveUninitialized: true,    // 强制将未初始化的session存储   默认true  建议true
  cookie: { 
    maxAge : 5000
    // secure: true 
  }, // true : https only, cookie的所有配置都可以在这里设置
  rolling : true   /** cookie存续时间会被访问重置  **/
}))

app.get('/', function(req, res) {
    // get session
    if(req.session.nameInfo) {
      res.send('hello '+req.session.nameInfo);
    }else{
      res.send('no login');
    }

})

app.get('/news', function(req, res) {
    // get session
    if(req.session.nameInfo) {
      res.send('hello news '+req.session.nameInfo);
    }else{
      res.send('no news');
    }

})

app.get('/login', function(req, res) {
    // set session
    req.session.nameInfo = "Tom";
    res.send('login successfully');
})

app.listen(8001, '127.0.0.1');