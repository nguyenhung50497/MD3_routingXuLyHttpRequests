let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer(function (req, res) {

    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function (data) {
    buffer += decoder.write(data);
    });
    req.on('end', function (end) {
    buffer += decoder.end();
    res.end('Hello Node Js');
    console.log(buffer);
    });
})