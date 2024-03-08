
const { SuccessModel } = require("../model/responseModel");
const { getUser ,userLogin } = require('../controllers/user')
const handleRoute = (req, res) => {
    // 定义处理路由的逻辑
    const method = req.method;
    console.log(req.query);
    // 判断方法和路径，给出回调结果
    if (method === "GET" && req.path === "/api/user/info") { //获取个人信息
        ///api/user/info?id=666&token=asdfggqeert
        const id = req.query.id;
        const token = req.query.token;
        const user = getUser(id, token);//获取用户数据的逻辑封装在这个方法里面
        return new SuccessModel(user);
    }
    if (method === "POST" && req.path === "/api/user/login") {//登录 - post
        //user password
        const user = req.query.user;
        const password = req.query.password;
        const loginData = userLogin(user, password);
        return new SuccessModel(loginData);
    }
}
module.exports = handleRoute;