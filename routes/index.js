var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hola, Mayank Raval !!!' , message : 'Welcome to my personal Web !!!'});
});

//Get contact page
router.get('/contact', function(req,res,next) {
    var ranNum = Math.random();
    res.render('contact',{title : 'Get in Touch!!!'});
});

module.exports = router;
