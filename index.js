var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('./config/ppConfig');
var flash = require('connect-flash');
var isLoggedIn = require('./middleware/isLoggedIn');
var request = require('request');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use(session({
  secret: process.env.SESSION_SECRET || 'abcdefghijklmnopqrstuvwxyz',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res) {
     res.render('index');
});



// app.get('/', function(req, res) {
//   request("https://dev.gtwll.io/api/venues?q=cuisine.name:sushi cost:[2 TO 4]&kind=place&sort=cost&status=published", function (error, response, body) {
//     if (!error && response.statusCode == 200){
//       console.log('apl');
//       res.send(body);
//     }
//   });
// });

app.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile');
});

app.use('/auth', require('./controllers/auth'));
app.use('/organizations', require('./controllers/organizations'));
app.use('/activities', require('./controllers/activities'));
app.use('/list', require('./controllers/nonprofit'));



var server = app.listen(process.env.PORT || 3000);

module.exports = server;
