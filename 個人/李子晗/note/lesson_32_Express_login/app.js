const express = require('express');
// 引入mongodb
const { MongoClient } = require('mongodb');
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
    res.render('login');
});

// 数据库的数据查询
app.post('/doLogin', function(req, res) {
    // console.log(req.body);
    MongoClient.connect(DbUrl, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('login');
        // var result = dbo.collection("userinfo").find({ "username": req.body.username, "pwd": req.body.password });
        // , function(error, result) {
        //     if (error) throw error;
        //     console.log(result);
        //     res.send("Data was finded");
        //     db.close();
        // });
        // var loginInfo = {
        //     "username": req.body.username,
        //     "pwd": req.body.password
        // };
        dbo.collection("userinfo").find({}).toArray(function(error, result) {
            if (error) throw error;
            console.log(result);
            // console.log(loginInfo['username']);
            // console.log(loginInfo['pwd']);

            // ejs.renderFile('views/findall.ejs', { msg: result }, function(err1, data) {
            //     if (err1) throw err1;
            //     res.send(data);
            // })
            db.close();
        });
    });

})

app.listen(8001, '127.0.0.1');