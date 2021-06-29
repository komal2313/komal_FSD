var http = require("http");
var module = require("./module");
//require is used to import something is node JS

//create server is a method to create server
//server is used in any language to create a backend service to accept
// request and deliver responses.
http
 .createServer((req, res) => {
     res.writeHead(200);
     //res.write("The current date and time is: " + module.myDate());
     //res.write(req.url);
     if (req.url === "/about-us") {
         res.write("About Us");
     }
     res.end();
 })
 .listen(8080);
