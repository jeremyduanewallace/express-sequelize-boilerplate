var express = require('express');
var router = express.Router();

// WE ARE IN THE /activities FOLDER

router.get('/', function(req, res) {
  res.render('activities/index');
});

router.get('/list', function(req, res){
  res.render('activities/list');
});

router.post('/', function(req, res) {
  res.redirect('/');
});

router.put('/:id', function(req, res){
  res.redirect('/');
});

router.delete('/:id', function(req, res){
  res.redirect('/');
});

// make sure anything with a param is at the bottom
router.get('/:id', function(req, res) {
  res.render('activities/details');
});











module.exports = router;