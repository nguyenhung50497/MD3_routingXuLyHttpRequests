//dependence

let http = require('http');
let url = require('url');
let StringDecoder = require('string_decoder').StringDecoder;

//definer the handler

let handlers = {};
//sample handlers
handlers.sample = function (data, callback) {
// call back
 callback(406, {'name': 'sample handle'})
};
//not found sample
handlers.notFound = function (data, callback) {
 callback(404);
};

//home
handlers.home = function (data, callback) {
// call back
 callback(200, 'home page');
};

//definer the request router

let router = {
    'sample': handlers.sample,
    'home': handlers.home,
}

