var http = require('http');
var fs = requrie('fs');

http.createServer(function(req, res){
    fs.appendFile('mynewfile1.txt','Hello World!',function(err){
        if(err) throw err;
        console.log('saved');
    });
}).listen(8080);