var http = require('http');
var url = require('url');
var ejs = require('ejs');
var app = require('./model/express_router');

// 引入mongodb
const { MongoClient } = require('mongodb');
// 数据库url设置
var urldb = "mongodb://localhost:27017/";

app.get('/login', function(req, res) {
    console.log('login');

    ejs.renderFile('views/form.ejs', {}, function(err, data) {
        res.send(data);
    });

    res.end('login');
})
app.get('/xxx', function(req, res) {
    console.log('xxx');
    res.end('xxx');
})

// 执行登录
app.post('/dologin', function(req, res) {
    console.log(req.body); // 获取post传过来的数据
    res.send("<script>alert('ok');history.back();</script>");
})

// home page
app.get('/', function(req, res) {
    var msg = "this database info";
    ejs.renderFile('views/index.ejs', { msg: msg }, function(err, data) {
        res.send(data);
    })
})

// 数据库增加数据
app.get('/add', function(req, res) {
    MongoClient.connect(urldb, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('itying');
        var myobj = { name: "Company Inc", age: "37" };
        dbo.collection("test").insertOne(myobj, function(error, result) {
            if (error) throw error;
            res.send("1 document inserted");
            db.close();
        });
    });
})


// 数据库的数据修改
app.get('/edit', function(req, res) {
    MongoClient.connect(urldb, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('itying');
        var myquery = { name: "Company Inc" };
        var newValues = { $set: { "age": "88" } };
        dbo.collection("test").updateOne(myquery, newValues, function(error, result) {
            if (error) throw error;
            res.send("1 document edited");
            db.close();
        });
    });
})

// 数据库的数据修改
app.get('/delete', function(req, res) {
    // /delete?name='Company Inc'
    var query = url.parse(req.url, true).query;
    // console.log(query.name);
    MongoClient.connect(urldb, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('itying');
        var myquery = { name: query.name };
        dbo.collection("test").deleteOne(myquery, function(error, result) {
            if (error) throw error;
            console.log(result);
            res.send("1 document deleted");
            db.close();
        });
    });
})

// 数据库的数据查询
app.get('/findone', function(req, res) {

    MongoClient.connect(urldb, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('itying');
        dbo.collection("test").findOne({}, function(error, result) {
            if (error) throw error;
            console.log(result);
            res.send("Data was finded");
            db.close();
        });
    });
})

// 数据库的数据查询
app.get('/findall', function(req, res) {
    MongoClient.connect(urldb, function(err, db) { // client to db
        if (err) throw err;
        var dbo = db.db('itying');
        dbo.collection("test").find({}).toArray(function(error, result) {
            if (error) throw error;
            ejs.renderFile('views/findall.ejs', { msg: result }, function(err1, data) {
                if (err1) throw err1;
                res.send(data);
            })
            db.close();
        });
    });
})

// 路由：是指根据不用的url，执行相应的业务逻辑
http.createServer(app).listen(8001);