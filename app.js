const routeHandler = require('./routes/route.js');
const serverHandler = (req, res) => { //处理逻辑 业务代码
    res.setHeader('Content-Type', 'application/json');
    req.path = req.url.split('?')[0];
    const routeData = routeHandler(req, res);
    if (routeData) {
        res.end(
            JSON.stringify(routeData)
        );
        return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 not found');
    res.end();
}
module.exports = serverHandler; //导出 serverHandler