/**
 * 路由
 * */
const path = require('path');


function routers (app){
    // 接收浏览器的url请求
    app.get('/', function(req, res) {
        res.send('<h1>Hello World!</h1>');
    });

    app.get('/login', function(req, res) {
        res.sendFile(concatPath('login.html'));
    });
}

function concatPath(name) {
    return path.join(__dirname, '../../views/' + name)
}

module.exports = routers;