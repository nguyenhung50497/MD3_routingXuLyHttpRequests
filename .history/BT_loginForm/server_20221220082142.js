let http = require('http');
let url = require('url');
let fs = require('fs');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer(function(req, res) {
    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');

});

server.listen(3000, function() {
    console.log();