const db = require('./index')
const { dbName } = require('./createDB');
const comfun = require('../commonFun');

const selectUseSQL = 'use ' + dbName;
const loginDBSQL = 'select id, name, age from user where name=? and password=?';


module.exports = {
    loginDB(name, password) {
        return new Promise((resolve, reject) => {
            db.query(selectUseSQL, function (err, result) {
                if (err) {
                    comfun.ErrorLog(err, selectUseSQL);
                    resolve(false);
                    return false;
                }
                db.query(loginDBSQL, [name, password], function (err, result) {
                    if (err) {
                        comfun.ErrorLog(err, loginDBSQL);
                        resolve(false);
                        return false;
                    }
                    resolve(result)
                })
            })
        })
    }
};