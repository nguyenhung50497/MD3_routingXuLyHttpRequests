let http = require('http');
let url = require('url');
let fs = require('fs');



let server = http.createServer(function (req, res) {

    

    //get url and parse

    let parseUrl = url.parse(req.url, true);
    
    //get the path

    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
    chosenHandler(req, res);
})

server.listen(3000, function () {
console.log("the server is listening on port 3000 now ");
})