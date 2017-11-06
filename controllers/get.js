const get = exports;
const fs = require('fs');


contentTypes = {
    'html'  : 'text/html',
    'js'    : 'text/javascript',
    'json'  : 'application/json',
    'css'   : 'text/css',
    'text'  : 'text/plain'
};

function  getResponse (contentType, body) {
    return {
        "contentType" : contentType        
    }
};

get.indexx = function (req, res, payload, cb) {
    fs.readFile("./public/index.html", (err, data) => {
        if (err) {
            cb({code: 404, message: 'Page not found'});
        }
        else {
            cb(null, getResponse(contentTypes["html"], data));
        }
    })
};

get.app = function (req, res, payload, cb) {
    fs.readFile("./public/index.js", (err, data) => {
        if (err) {
            cb({code: 404, message: 'Page not found'});
        }
        else {
            cb(null, getResponse(contentTypes["js"], data));
        }
    })
};

get.css = function (req, res, payload, cb) {
    fs.readFile("./public/site.css", (err, data) => {
        if (err) {
            cb({code: 404, message: 'Page not found'});
        }
        else {
            cb(null, getResponse(contentTypes["css"], data));
        }
    })
};

get.formm = function (req, res, payload, cb) {
    fs.readFile("./public/form.html", (err, data) => {
        if (err) {
            cb({code: 404, message: 'Page not found'});
        }
        else {
            cb(null, getResponse(contentTypes["html"], data));
        }
    })
};

get.formjs = function (req, res, payload, cb) {
    fs.readFile("./public/form.js", (err, data) => {
        if (err) {
            cb({code: 404, message: 'Page not found'});
        }
        else {
            cb(null, getResponse(contentTypes["js"], data));
        }
    })
};