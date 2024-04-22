const http = require('http');
const date = require('./module1');
const fs = require('fs').promises;
const filePath = './index.html';
const { MongoClient } = require('mongodb');
const url = ""


http.createServer(function (req, res) {
    res.writeHead(200, 'OK', { 'Content-Type': 'text/plain' });

    if (req.url == '/html') {
         // Update the file path if needed
         fs.writeFile(filePath, 'Hello content!', function (err) {
            if (err) throw err;
         });
        fs.readFile(filePath, 'utf-8')
            .then(data => {
                res.write(data);
                res.end();
            })
            .catch(err => {
                res.write(`Error reading file: ${err.message}`);
                res.end();
            });
    }else if(req.url=='/update'){
        fs.appendFile(filePath, ' This is my text.', function (err) {
            if (err) throw err;
            console.log('Updated!');
          });
    }
    // else if()
     else {
        res.write(date.date() + " Today for you");
        res.write(req.url);
        
        res.end();
    }

}).listen(8080);

console.log("Server is running at port 8080");
