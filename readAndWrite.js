var fs = require('fs');

// reading and writing files
// readFileSync is sync. readFile is async (needs callback function), non-blocking code.
fs.readFile('readMe.txt', 'utf8', function (err, data) {
    console.log("test readfile: " + data);
    fs.writeFile('writeMe.txt', data);  
    //fs.unlink('writeMe.txt'); //delete file
});

// it will show firstly
console.log("test async");


// creating directories
fs.mkdir('stuff', function () {
    fs.readFile('readMe.txt', 'utf8', function (err, data) {
        fs.writeFile('./stuff/writeMe.txt', data);
    });
});

//removing directories and files inside
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff');
});