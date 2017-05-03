var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	var data = req.app.get('tokenData');
	console.log(data);
	res.locals.access = data;

	res.render('main');
	var access_token = data.access_token;
	console.log(access_token + ' token');

	var apiCurrentAthlete = 'https://www.strava.com/api/v3/athlete';

	request({
		url: apiCurrentAthlete,
		headers: {
			'Authorization': 'Bearer ' + access_token
		}
	}, function(err, response, body){
		res.locals.currentAthlete = JSON.parse(body);
		console.log(JSON.parse(body));
	})
});

module.exports = router;
