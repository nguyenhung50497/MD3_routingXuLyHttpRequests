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
})

server.listen(3000, function () {
console.log("the server is listening on port 3000 now ");
})