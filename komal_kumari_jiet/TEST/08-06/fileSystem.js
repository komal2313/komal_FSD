var fs = require('fs');
var http = require("http");

http.createServer((req, res) => {

    fs.readFile("Hello.html", (err, data) => {
        if(err) {
            console.log(err)
            res.write("the file was not found");                              
            return res.end();
        }
        res.writeHead(200);
        res.write(data);
        res.end()
    });
})
.listen(8000);
