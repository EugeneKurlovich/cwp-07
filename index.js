const http = require('http');

const articlesControllers = require('./controllers/articles');
const commentsController = require('./controllers/comments');
const getController = require('./controllers/get');

const hostname = '127.0.0.1';
const port = 3000;

const handlers = {
    '/api/articles/readAll': articlesControllers.readAll,
    '/api/articles/read': articlesControllers.read,
    '/api/articles/create': articlesControllers.create,
    '/api/articles/update': articlesControllers.update,
    '/api/articles/delete': articlesControllers.deleteArt,
    '/api/comments/create': commentsController.create,
    '/api/comments/deleteCom': commentsController.deleteCom,

    '/' : getController.indexx,
    '/index.html' :getController.indexx,
    '/app.js' : getController.app,
    '/form.html' : getController.formm,
    '/form.js' : getController.formjs,
    '/site.css' : getController.css
};

const server = http.createServer((req, res) => {
    parseBodyJson(req, (err, payload) => {
        const handler = getHandler(req.url);
        handler(req, res, payload, (err, result) => {
            if (err) {
                res.statusCode = err.code;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(err));
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result));
        });
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function getHandler(url) {
    return handlers[url] || notFound;
}

function notFound(req, res, payload, cb) {
    cb({ code: 404, message: 'Not found' });
}

function parseBodyJson(req, cb) {
    let body = [];
    req.on('data', function (chunk) {
        body.push(chunk);
    }).on('end', function () {
        body = Buffer.concat(body).toString();
        if (body !== "") {
            params = JSON.parse(body);
            cb(null, params);
        }
        else {
            cb(null, null);
        }
    });
}
