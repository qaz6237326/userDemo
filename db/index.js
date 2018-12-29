const mysql = require('mysql');
const comfun = require('../commonFun');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    dateStrings: true
});
connection.connect(function() {
    console.log('数据库连接成功')
    require('./createDB').start();
});

module.exports = connection;