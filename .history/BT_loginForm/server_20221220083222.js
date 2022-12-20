let http = require('http');
let url = require('url');
let fs = require('fs');
let StringDecoder = require('string_decoder').StringDecoder;

let server = http.createServer(function(req, res) {
    let parseUrl = url.parse(req.url, true);
    let path = parseUrl.pathname;
    let trimPath = path.replace(/^\/+|\/+$/g, '');
    if (req.method === 'GET') {
        let chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
        chosenHandler(req, res);
    }
    else {
        let chosenHandler = router.profile;
        chosenHandler(req, res);
    }
});

server.listen(3000, function() {
    console.log('server running on port 3000');
});

let handlers = {};

handlers.home = function(req, res) {
    fs.readFile('./view/home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        req.write(data);
        req.end();
    });
};

handlers.login = function(req, res) {
    fs.readFile('./view/login.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        req.write(data);
        req.end();
    });
};

handlers.profile = function(req, res) {
    let data = '';
    req.on('data', chunk => {
        data += chunk
    });

    req.on('end', () => {
        data = qs.parse(data);
        let name = data
    });

    fs.readFile('./view/profile.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        req.write(data);
        req.end();
    });
};

handlers.notFound = function(req, res) {
    fs.readFile('./view/notfound.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        req.write(data);
        req.end();
    });
};

let router = {
    'home': handlers.home,
    'profile': handlers.profile,
    'login': handlers.login
}