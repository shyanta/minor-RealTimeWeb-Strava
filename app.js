// NPM requirements
var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var io = require('socket.io');

// Declare app Routers
var indexRouter = require('./routes/home');
var mainRouter = require('./routes/main');
var oauthRouter = require('./routes/oauth');

// Set view engine to .ejs and tell app where these files are placed
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Tell express which static files to serve
app.use(express.static('public'));

// Declare routes for the app to listen to
app.get('/', indexRouter);
app.get('/oauth', oauthRouter);
app.get('/main', mainRouter);

app.get('/*', function(req, res){
	res.render('404');
});

app.listen(process.env.PORT || 8000, function(req, res){
	console.log('App is running at localhost:8000')
});
