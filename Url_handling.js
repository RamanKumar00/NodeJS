const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico")return res.end();
    const log = `${Date.now()}- ${req.method} ${req.url} New Req Received\n`;
    const myurl = url.parse(req.url);
    console.log(myurl);

    fs.appendFile("log.txt", log, (err) => {
        switch(req.url){
            case '/':res.end("Home page");
            break
            case '/about':res.end("i m raman kumar");
            break;
            default:
                res.end("404 not found");
        }
            
        });
});

myServer.listen(8001, () => console.log("Server started on port 8001!"));
