const routeHandler = require('./routes/route.js');
const querystring = require('querystring');
const serverHandler = (req, res) => { //处理逻辑 业务代码
    res.setHeader('Content-Type', 'application/json');
    req.path = req.url.split('?')[0];

//解析 query
   req.query = querystring.parse(req.url.split('?')[1]);
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