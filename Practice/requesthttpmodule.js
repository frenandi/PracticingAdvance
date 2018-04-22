const http = require("http");

const req = http.request(
    { hostname: "www.google.com"},
    (res) => {
        console.log(res.statusCode);
        console.log(res.headers);

        res.on("data", (data) => {
            console.log(data.toString()); //this is a buffer that why we convert it
        });
    }
);

req.on("error", (e) => console.log(e));

req.end();