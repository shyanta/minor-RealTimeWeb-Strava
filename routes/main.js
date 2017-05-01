var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	// request('https://www.strava.com/oauth/token', function(error, response, data){
	//
	// })
	console.log(req.app.get('code'));
	res.render('main');
});

module.exports = router;
