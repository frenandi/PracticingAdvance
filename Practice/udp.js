//SERVER
const PORT = 3333;
const HOST = "127.0.0.1";



const dgram = require("dgram");

const server = dgram.createSocket("udp4");

server.on("listening", () => console.log("UDP server listening"));
server.on("message", (msg,rinfo) => {
 console.log(`${rinfo.address}:${rinfo.port} - ${msg}`)
});

server.bind(PORT,HOST);
//CLIENT
const client = dgram.createSocket("udp4");

client.send("pluransight",PORT,HOST,(err) => {
    if(err) throw err;
    console.log("udp message sent");
    client.close();
});