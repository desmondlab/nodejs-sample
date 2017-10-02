var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// create application/x-www-form-urlencoded parser
// use urlencodedParser in post request
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// let express use with ejs
app.set('view engine', 'ejs');

// express middleware
// assets for routing, stuff for the folder
// anything when the route matched with "/assets", and it will look for the "stuff" file
app.use('/assets', express.static('stuff'));

app.get('/profile/:name', function(req, res){
    var data = {age: 20, job: 'dev', hobbies: ['eating', 'drinking', 'running']};
    //no need to define a path for profile.ejs, it is default behaviour to look into the "views" file
    res.render('profile', {person: req.params.name, data: data}); 
});

app.get('/contact', function(req, res){
    // query strings, e.g. ?name=aaaa&num=1111
    res.render('contact', {qs: req.query}); 
});

// for "/form" routing with post request, app.get path must be set 
app.get('/form', function(req, res){
    res.render('form'); 
});

// post method need to use with get method (above code), otherwise it will show "cannot get /form"
// POST /form gets urlencoded bodies using body-parser
app.post('/form', urlencodedParser, function(req, res){
   console.log(req.body);
   res.render('form-success', {data: req.body}); 
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