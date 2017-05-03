var express = require('express');
var request = require('request');

var router = express.Router();

router.get('*', function(req, res){
	var code = req.query.code;
	// console.log(code);
	var postUrl = 'https://www.strava.com/oauth/token/';
	console.log('post')

	request.post(postUrl, {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: code
	}, function (err, result, body){
		console.log(err, result, body);
	})

	res.render('oauth');
});

module.exports = router;
