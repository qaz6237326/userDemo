const comfun = require('../commonFun');
const db = require('./index');

const dbName = 'userDB';
const createDBSQL = 'create database ' + dbName;
const createTableSQL = `CREATE TABLE \`user\` (
  \`id\` int(10) unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(20) NOT NULL,
  \`age\` int(11) DEFAULT NULL,
  \`password\` varchar(20) NOT NULL DEFAULT '123456',
  \`createTime\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  \`updateTime\` datetime DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 `;

// 开始创建数据库、选择数据库，创建表
function start() {
    sqlFun(createDBSQL, '创建数据库').then((res) => {
        sqlFun('use ' + dbName, '选择数据库').then((res) => {
            sqlFun(createTableSQL, '创建表')
        })
    });
}

/**
 * 执行sql语句
 * @param sql 要执行的sql语句
 * @param str 自定义的打印信息
 * */
function sqlFun(sql, str) {
    return new Promise((resolve, reject) => {
        db.query(sql, function (err, rows) {
            if (err) {
                comfun.ErrorLog(sql, err);
                reject(false);
            } else {
                comfun.SuccessLog(str + '成功', rows);
                resolve(true)
            }
        })
    })
}

module.exports = {
    dbName: dbName,
    start: start
};