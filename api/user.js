/**
 * 用户信息操作
 * @param app express实例
 * */
const userDB = require('../db/user');

module.exports = (app) => {
    let body;
    let json;
    app.get('/allUser', (req, res) => {
        userDB.queryAllUserDB()
            .then(data => {
                if (data) {
                    json = {
                        result: true,
                        data: data,
                        message: ''
                    };
                    res.json(json)
                }
            })
    });
    app.post('/addUser', (req, res) => {
        body = req.body;
        if (!body.name || !body.password) {
            json = {
                result: false,
                message: '用户名和密码必须要填写。'
            };
            res.send(json)
        } else {
            userDB.addUserDB(body)
                .then(data => {
                    if (data) {
                        json = {
                            result: true,
                            message: '添加用户成功！'
                        };
                        res.send(json)
                    }
                })
        }
    });
    app.post('/updateUser', (req, res) => {
        body = req.body;
        if (!body.name || !body.password) {
            json = {
                result: false,
                message: '用户名和密码必须要填写。'
            };
            res.send(json)
        } else {
            userDB.updateUserDB(body)
                .then(data => {
                    if (data) {
                        json = {
                            result: true,
                            message: '修改 用户信息成功！'
                        };
                        res.send(json)
                    }
                })
        }
    });
    app.post('/deleteUser', (req, res) => {
        body = req.body;
        userDB.deleteUserDB(body)
            .then(data => {
                if (data) {
                    json = {
                        result: true,
                        message: '删除用户信息成功！'
                    };
                    res.send(json)
                }
            })
    });
};