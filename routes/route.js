const handleRoute = (req, res) => {
    // 定义处理路由的逻辑
    const method = req.method;
    const url = req.url;
    // const params = url.split('?')[1].split('&');

    // 判断方法和路径，给出回调结果
    if (method === "GET" && req.path === "/api/user/info") { //获取个人信息
        return {
            user: 'zhangsan',
            id: 666,
            icon: 'https://www.icon.com',
            age: 20,
            nationality:'Chinese'
        }
    }
    if (method === "POST" && req.path === "/api/user/login") {//登录 - post
        return {
            message: 'login success',
            code: 200,
            data: {
                user: 'zhangsan',
                id: 666,
                icon: 'https://www.icon.com',
                age: 20,
                nationality:'Chinese'
            }
        }
    }
}
module.exports = handleRoute;