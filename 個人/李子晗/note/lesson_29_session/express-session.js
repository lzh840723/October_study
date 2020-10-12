const express = require('express');
const session = require('express-session');

var app = express()

// set session middleware
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }  // true : https only
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