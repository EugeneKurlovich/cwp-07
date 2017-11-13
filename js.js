const fs = require('fs');

module.exports.appJS = (req, res, payload, cb)=>{
    fs.readFile('./public/app.js', (err, data)=>{
        if(!err)
            cb(null, data, 'text/javascript');
        else
            console.error(err);
    })
}

module.exports.formJS = (req, res, payload, cb)=>{
    fs.readFile('./public/form.js', (err, data)=>{
        if(!err)
            cb(null, data, 'text/javascript');
        else  
            console.error(err);
    })
}