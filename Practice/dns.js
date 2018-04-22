const dns = require("dns");

dns.lookup("pluralsight.com",(err, address) => {
    console.log(address);
});
//The equivalent in network module
dns.resolve4("pluralsight.com",(err, address) => {
    console.log(address);
});

dns.reverse("54.68.224.220", (err,hostnames)=> {
    console.log(hostnames);
});
