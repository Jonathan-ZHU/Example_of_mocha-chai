var express = require("express");
var app = express();
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//设置跨与访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//GET示例接口，直接返回传过来的数据
app.get('/sampleget',function(req,res){
    var msg = req.query.msg //get 方法参数在 query中
    res.send({err:0,msg:msg});
});

//POST示例接口，直接返回传过来的数据
app.post('/samplepost',function(req,res){
    var msg = req.body //post 方法参数在 body
    res.send({err:0,msg:req.body});
});

app.listen(8080);
console.log("Listening on port 8080...");
