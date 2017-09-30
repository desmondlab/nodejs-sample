var express = require('express');

var app = express();

// let express use with ejs
app.set('view engine', 'ejs');

app.get('/profile/:name', function(req, res){
    var data = {age: 20, job: 'dev', hobbies: ['eating', 'drinking', 'running']};
    //no need to define a path for profile.ejs, it is default behaviour to look into the "views" file
    res.render('profile', {person: req.params.name, data: data}); 
});


/* normal usage without using ejs */
/*
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/profile/:id', function(req, res){
    res.send('The id is: ' + req.params.id);
});
*/

app.listen(3000);