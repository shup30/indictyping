var express = require('express');
var path = require('path');
var app = express();
var favicon = require('serve-favicon');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));

// Region routes
var router = express.Router();
var marathi = require('./routes/marathi/mar.js');
var hindi = require('./routes/hindi/hin.js');
var gujarati = require('./routes/gujarati/guj.js');
var telugu = require('./routes/telugu/tel.js');
var tamil = require('./routes/tamil/tam.js');

var kannada = require('./routes/kannada/kan.js');
var nepali = require('./routes/nepali/nep.js');
var oriya = require('./routes/oriya/ori.js');
var sanskrit = require('./routes/sanskrit/san.js');
var sinhalese = require('./routes/sinhalese/sin.js');
var urdu = require('./routes/urdu/urd.js');
var punjabi = require('./routes/punjabi/pun.js');
var malayalam = require('./routes/malayalam/mal.js');
var bengali = require('./routes/bengali/ben.js');


app.use("/marathi-typing", marathi);
app.use("/hindi-typing", hindi);
app.use("/gujarati-typing", gujarati);
app.use("/telugu-typing", telugu);

app.use("/tamil-typing", tamil);
app.use("/kannada-typing", kannada);
app.use("/oriya-typing", oriya);
app.use("/sanskrit-typing", sanskrit);

app.use("/punjabi-typing", punjabi);
app.use("/urdu-typing", urdu);
app.use("/malayalam-typing", malayalam);
app.use("/bengali-typing", bengali);
app.use("/nepali-typing", nepali);
app.use("/sinhalese-typing", sinhalese);


app.get('/', function(req, res) {
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/fonts', function(req, res){
    res.render('fonts');
});

app.get('/privacy-policy', function(req, res){
    res.render('privacy');
});

app.get('/terms&conditions', function(req, res){
    res.render('terms');
});


app.get("/sitemap", function(req, res){
    res.sendFile(__dirname + '/public/sitemaps/root/sitemap.xml'); 
  });

app.listen(3000);   