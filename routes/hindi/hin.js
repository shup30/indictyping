var express = require('express');
var router  = express.Router();

router.use(express.static(__dirname + "/public"));


router.get('/', function(req, res) {
    res.render('hindi');
});

router.get('/test', function(req, res){
    res.send('This is test Page');
});

router.get("/sitemap", function(req, res){
    res.sendFile(__dirname + '/sitemap.xml'); 
  });

module.exports = router;