//This give us one event emmiter
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) =>{
    res.writeHead(200, {"content-type" : "text/plain"});
    res.end("Hello world");
}).listen(8000);