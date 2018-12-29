/**
 * API方法的主入口
 * 子模块暴露出来的方法需要是一个函数，用来传递app
 * */
const user = require('./user');
const login = require('./login');

module.exports = (app) => {
  user(app);
  login(app);
};

