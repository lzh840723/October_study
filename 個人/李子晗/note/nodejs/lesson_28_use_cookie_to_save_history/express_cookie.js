var express = require('express');
const cookieParser = require('cookie-parser');
var app = new express();

app.use(cookieParser()); 

app.get('/', function(req, res) {
    res.send('你浏览过的城市'+req.cookies.citys);
})


app.get('/lvyou', function(req, res) {
    var city = req.query.city;   // 获取当前城市
    var citys = req.cookies.citys;   // 城市集合  获取所有城市
    // console.log(citys);
    if(citys){
        citys.push(city);
    }else{
        citys = [];   // 没有浏览过任何城市的话，把citys改为数组，否则为undefined
        citys.push(city);
    }

    res.cookie('citys', citys, {maxAge:1000*60*10});
    res.send('你浏览过的城市是'+city);
})

app.listen(8001, '127.0.0.1');