const express = require('express');
const fs = require('fs');
// 引入mongodb
const { MongoClient } = require('mongodb');
const ejs = require('ejs');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// 数据库url设置
const DbUrl = "mongodb://localhost:27017/";

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    // res.render('login');

    ejs.renderFile('views/login.ejs', { msg: '' }, function(err1, data) {
        if (err1) throw err1;
        res.send(data);
    });
});

// 数据库的数据查询
app.post('/dologin', function(req, res) {
    MongoClient.connect(DbUrl, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('login');
        var loginLogPath = "login.log";
        var date = new Date();
        var clientId = date.getTime() + req.body.username;
        var logInfo = date + " : " + clientId + "|" + req.body.username + "|" + req.body.pwd;
        dbo.collection("userinfo").find(req.body).toArray(function(error, result) {
            if (error) throw error;
            if (result.length > 0) {
                fs.appendFile(loginLogPath, logInfo + ' 登録成功しました。\n', function(err) {
                    if (err) throw err;
                });
                // res.send(JSON.parse('{"flag":"1"}'));
                ejs.renderFile('views/login.ejs', { msg: '登録成功' }, function(err1, data) {
                    if (err1) throw err1;
                    res.send(data);
                });
                // res.render('login');
            } else {
                fs.appendFile(loginLogPath, logInfo + ' 登録失敗しました。\n', function(err) {
                    if (err) throw err;
                });
                // res.send(JSON.parse('{"flag":"0"}'));
                // res.render('login');
                ejs.renderFile('views/login.ejs', { msg: '登録失败' }, function(err1, data) {
                    if (err1) throw err1;
                    // console.log(data);
                    res.send(data);
                });
            }
            db.close();
        });
    });
})

app.listen(8001, '127.0.0.1');