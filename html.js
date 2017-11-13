const fs = require('fs');

module.exports.getIndexHtml = (req, res, payload, cb)=>{
    fs.readFile('./public/index.html', (err, data)=>{
        if(!err)
            cb(null, data, 'text/html');
        else
            console.error(err);
    })
}

module.exports.getFormHtml = (req, res, payload, cb)=>{
    fs.readFile('./public/form.html', (err, data)=>{
        if(!err)
            cb(null, data, 'text/html');
        else
            console.error(err);
    })
}