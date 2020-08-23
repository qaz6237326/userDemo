
const db = require('../db/login');
const { urlPrefix } = require('./prefix');

module.exports = (app) => {
    let body;
    let json;
    app.post(urlPrefix + '/loginApi', function(req, res) {
        console.log(req.body)
        body = req.body;
        if(!body.name || !body.password) {
            json = {
                result: false,
                message: '请填写完整的信息。'
            };
            res.send(json);
            return;
        }
        db.loginDB(body.name, body.password)
            .then((data) => {
                console.log('当前登录用户===', data)
                if (data.length) {
                    json = {
                        result: true,
                        data: data,
                        message: '登录成功'
                    };
                } else {
                    json = {
                        result: false,
                        message: '用户不存在'
                    };
                }
                res.send(json)
            });
    });
};
