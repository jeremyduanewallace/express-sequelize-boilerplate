var express = require('express');
var router = express.Router();
var db = require('../models');
var request = require('request');

router.get('/', function(req, res) {
  request({
    url: 'http://poi.esperas.org/api/venues?q=Seattle&limit=1000',
    headers: {
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfbWV0YWRhdGEiOnsicm9sZXMiOlsiYWRtaW4iXX0sImlzcyI6Imh0dHBzOi8vYXBwNDcyMzI5NTIuYXV0aDAuY29tLyIsInN1YiI6ImZhY2Vib29rfDEwMjA3MTUwNTYxODYwMjM3IiwiYXVkIjoibzB2V1pXZXJPMW93ejNzVlFBOUdsVmt2VTZ3WGJ2ZzUiLCJleHAiOjE0OTEwNjMwNTYsImlhdCI6MTQ1OTUyNzA1Nn0.LPjw7Xq6XrnWf9y2vSBa3bk0USkjwMakIbU_CZi0m9E'
    }
  },function(error, response, body){

    geoArray = [];

    JSON.parse(body).forEach(function(item){
      geoArray.push(
        {
          latitude: item.geometry.coordinates[0],
          longitude: item.geometry.coordinates[1]
        }
      );
    })
     res.render('nonprofit/list', {
      data: JSON.parse(body),
      coordinates: geoArray
     });
  });
});


module.exports = router;