var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	var data = req.app.get('tokenData');
	var access_token = data.access_token;
	var apiCurrentAthlete = 'https://www.strava.com/api/v3/athlete';
	var apiAthleteFriends = ' https://www.strava.com/api/v3/athlete/friends'

	request({
		url: apiCurrentAthlete,
		headers: {
			'Authorization': 'Bearer ' + access_token
		}
	}, function(err, response, body){
		res.locals.myData = JSON.parse(body);
	})
	
	request({
		url: apiAthleteFriends,
		headers: {
			'Authorization' : 'Bearer ' + access_token
		}
	}, function(err, response, body){
		res.locals.myFriends = JSON.parse(body);
		res.render('main');
	})

});

module.exports = router;
