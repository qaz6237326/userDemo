const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// 解析请求体到request.body里，但是request.on()就无法使用
app.use(bodyParser.json());

// 设置静态文件地址
app.use(express.static('static'));


// 启动数据库
require('./db/index');

// 设置API
require('./api/index')(app);

// 设置路由
require('./server/router')(app);

// 监听端口
const server = app.listen(8080, 'localhost', function() {
    let host = server.address().address;
    let port = server.address().port;
    console.log('服务已启动，地址：http://%s:%s', host, port);
});