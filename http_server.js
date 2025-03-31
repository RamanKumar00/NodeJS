const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`;

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

myServer.listen(8000, () => console.log("Server started on port 8000!"));
