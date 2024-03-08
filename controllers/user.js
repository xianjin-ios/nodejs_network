//用户相关的方法
const getUser = (id,token) => {
    //从数据库中获取
    
    //模拟数据库
    return {
        user: 'zhangsan',
        id: id,
        icon: 'https://www.icon.com',
        age: 20,
        nationality: 'Chinese'
    }


}
module.exports = {
    getUser
}