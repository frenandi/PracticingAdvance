const server = require("http").createServer();

server.on("request", (req, res) => {
    console.log(req.url);
    res.writeHead(200, {"Content-Rype": "text/plain"});
    res.end("Hello World");
}).listen(8000);