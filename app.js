// NPM requirements
var express = require('express');
var path = require('path');
var ejs = require('ejs');

// Setup NPM Modules to use (only when needed with the NPM module)
require('dotenv').config();
var app = express();

// Declare app Routers
var indexRouter = require('./routes/index');
var mainRouter = require('./routes/main');
var oauthRouter = require('./routes/oauth');

// Set view engine to .ejs and tell app where these files are placed
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('code', '');

// Tell express which static files to serve
app.use(express.static('public'));

// Declare routes for the app to listen to
app.use('/', indexRouter);
app.use('/oauth', oauthRouter);
app.use('/main', mainRouter);

// If the users search for a page that isn't declared above, it will render a 404-page
app.get('/*', function(req, res){
	res.render('404');
});

app.listen(process.env.PORT || 8000, function(req, res){
	console.log('App is running at localhost:8000')
});
