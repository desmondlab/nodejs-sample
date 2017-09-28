var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'content-Type': 'text/plain'}); //to load html page, change to 'text/html'
    var myReadStream = fs.createReadStream(__dirname + '/readMe_1.txt', 'utf8'); 
    //res is writable stream
    //piping readable stream to writable stream
    myReadStream.pipe(res); 
});

server.listen(3000, '127.0.0.1'); // request ip address and port
console.log('now listening to port 3000.....');


/*
var myReadStream = fs.createReadStream(__dirname + '/readMe_1.txt', 'utf8'); // without utf8, it will display in Buffer
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe_1.txt');
*/

/*
myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    myWriteStream.write(chunk);
}); */