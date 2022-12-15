let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;


let server = http.createServer(function (req, res) {

res.end('Hello Node Js');
 console.log(queryStringObject);
})
//server start

server.listen(3000, function () {
 console.log("the server is listening on port 3000 now ");
})