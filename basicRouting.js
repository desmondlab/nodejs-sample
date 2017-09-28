var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-Type': 'text/html'}); 
        fs.createReadStream(__dirname + '/index.html').pipe(res); 
    } else if( req.url === '/api/test'){
        res.writeHead(200, {'content-Type': 'application/json'});
        var myObj = {
            name: 'RR',
            job: 'tt',
            age: 20
        }
        fs.end(JSON.stringify(myObj)); 
    } else {
        res.writeHead(404, {'content-Type': 'text/html'}); 
        fs.createReadStream(__dirname + '/404.html').pipe(res); 
    }

});

server.listen(3000, '127.0.0.1'); // request ip address and port
console.log('now listening to port 3000.....');

