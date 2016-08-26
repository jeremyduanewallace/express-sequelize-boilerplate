var express = require('express');
var router = express.Router();
var db = require('../models');

// WE ARE IN THE /activities FOLDER

router.get('/', function(req, res) {
  res.render('activities/new');
});

router.post('/', function(req, res) {
  db.activity.create({
      org: req.body.organization,
      name: req.body.name,
      location: req.body.location,
      date: req.body.date,
      hours: req.body.hours,
      event: req.body.event   
    }).then(function(activity){
      db.organization.findOrCreate({
        name: req.body.organization
      }).spread(function(org, created){
        res.redirect('/organizations');
      })
    })
});

router.put('/:id', function(req, res){
  res.redirect('/');
});

router.delete('/:id', function(req, res){
  res.redirect('/');
});

// make sure anything with a param is at the bottom
router.get('activities/:id', function(req, res) {
  res.render('activities/show');
});











module.exports = router;