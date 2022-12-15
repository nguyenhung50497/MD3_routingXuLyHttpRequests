let http = require('http');
let url = require('url');
let fs = require('fs');

let server = http.createServer(function (req, res) {

    let router = {
        'users': handlers.users,
        'products': handlers.products
    }
    let handlers = {};

    // products page

    handlers.products = function (rep, res) {
        fs.readFile('./view/products.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    };

    // handlers.users page

    handlers.users = function (rep, res) {
        fs.readFile('./view/users.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    };

    // not found

    handlers.notFound = function (rep, res) {
        fs.readFile('./view/notfound.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    };

     //get url and parse


 var parseUrl = url.parse(req.url, true);
 //
 // //get the path


 var path = parseUrl.pathname;
 var trimPath = path.replace(/^\/+|\/+$/g, '');

var chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
 chosenHandler(req, res);
})

server.listen(3000, function () {
console.log("the server is listening on port 3000 now ");
})