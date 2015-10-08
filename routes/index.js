var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'First Express Page !!!' , message : 'Its pretty much cool!!!'});
});

//Get random page
router.get('/random', function(req,res,next) {
    var ranNum = Math.random();
    res.render('random',{ranNum: ranNum,title : 'First Express Page !!!'});
});

module.exports = router;
