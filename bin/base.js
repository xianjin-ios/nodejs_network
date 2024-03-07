const http = require('http');
const serverHandler = require('../app.js');
const PORT = 5005; //端口
const server = http.createServer(serverHandler);
server.listen(PORT, () => {
    console.log('server is running at port ',PORT);
})
