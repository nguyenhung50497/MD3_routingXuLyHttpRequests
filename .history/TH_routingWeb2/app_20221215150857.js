let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(function (req, res) {

    let router = {
        'users': handlers.users,
        'products': handlers.products
    }
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', function (data) {
    buffer += decoder.write(data);
    });
    req.on('end', function (end) {
    buffer += decoder.end();
    res.end('Hello Node Js');
    console.log(buffer);
    });
})

server.listen(3000, function () {
console.log("the server is listening on port 3000 now ");
})