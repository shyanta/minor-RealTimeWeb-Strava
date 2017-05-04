var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	var data = req.app.get('tokenData');
	console.log('Tokendata', data);
	res.locals.access = data;

	var access_token = data.access_token;

	var apiCurrentAthlete = 'https://www.strava.com/api/v3/athlete';

	request({
		url: apiCurrentAthlete,
		headers: {
			'Authorization': 'Bearer ' + access_token
		}
	}, function(err, response, body){
		console.log('Mydata', JSON.parse(body));
		res.locals.myData = JSON.parse(body);
	})

	res.render('main', {myData : myData});
});

module.exports = router;
