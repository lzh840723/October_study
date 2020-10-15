
var express = require("express");
var index = require('./routes/index.js');
var login = require('./routes/login/login.js');
var dbconnect = require('./modules/dbconnect');

var app = new express();

app.set('view engine','ejs');

//useType dev->devDB app->appDB test->testDB
dbconnect.open('dev');//app.jsへ起動時DBに接続する

app.use(express.static('public'));//仮想ディレクトリ
app.use('/logs',express.static('logs'));//2番目仮想ディレクトリ

app.use('/',index);
app.use('/login',login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(3000);
