var express = require('express');
var router = express.Router();
var db = require('../models');

// data base query for rendering in page
router.get('/', function(req, res){
  db.activity.findAll().then(function(activities) {
    res.render('organizations/index', {activities: activities});
  });
});

router.get('/new', function(req, res){
  res.render('organizations/new');

});

router.get('/:orgName', function(req, res){
  db.organization.find({
    where: { name: req.params.orgName }
  }).then(function(activity){
    d
    // res.render('organizations/show')
  })
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