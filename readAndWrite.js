var fs = require('fs');

// readFile is async (needs callback function), non-blocking code.
fs.readFile('readMe.txt', 'utf8', function(err, data){
    console.log("test readfile: " + data);
    fs.writeFile('writeMe.txt', data);
});

// it will show first
console.log("test async");