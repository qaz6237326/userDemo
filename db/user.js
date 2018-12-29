/**
 * 用户信息操作
 * */
const db = require('./index');
const { dbName } = require('./createDB');

const comfun = require('../commonFun/index');

const useDBSql = 'use ' + dbName;
const queryAllUserSql = 'select * from user';
const addUserSql = 'insert into user(name, age, password, updateTime) values(?,?,?,now())';
const deleteUserSql = 'delete from user where id=? ';

module.exports = {
    /**
     * 查询数据库 wldb 里的 user表
     * */
    queryAllUserDB () {
        return queryDB(queryAllUserSql, []);
    },
    /**
     * 添加一个用户
     * */
    addUserDB (data) {
        let _data = [data.name, data.age, data.password];
        return queryDB(addUserSql, _data);
    },
    /**
     * 修改一个用户的信息
     * */
    updateUserDB (data) {
        let _data;
        let _sql
        if (data.password) {
            _data = [ data.name, data.age, data.password, data.id];
            _sql = 'update user SET name=?,age=?,password=?,updateTime=now() where id=?'
        } else {
            _data = [data.id, data.name, data.age, data.id];
            _sql = 'update user SET name=?,age=?,updateTime=now() where id=?'
        }
        return queryDB(_sql, _data);
    },
    /**
     * 删除一个用户的信息
     * */
    deleteUserDB (data) {
        let _data = [data.id];
        return queryDB(deleteUserSql, _data);
    }
};

function queryDB(sql, data) {
    return new Promise((resolve, reject) => {
        db.query(useDBSql, function(err, result) {
            if (err) {
                comfun.ErrorLog(sql, err);
                resolve(false);
            } else {
                db.query(sql, data, function(err, result) {
                    if (err) {
                        comfun.ErrorLog(sql, err);
                        resolve(false);
                    } else {
                        resolve(result)
                    }
                })
            }
        });
    })
}