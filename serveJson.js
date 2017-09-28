var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'content-Type': 'application/json'});
    var myObj = {
        name: 'RR',
        job: 'tt',
        age: 20
    }

    // .end() recognize string or buffer
    // serialize the object to string in JSON format
    res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1'); // request ip address and port
console.log('now listening to port 3000.....');