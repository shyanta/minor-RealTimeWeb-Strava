var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	var data = req.app.get('tokenData');
	var access_token = data.access_token;
	var apiCurrentAthlete = 'https://www.strava.com/api/v3/athlete';
	var apiAthleteFriends = 'https://www.strava.com/api/v3/athlete/friends';
	var apiAthleteActivities = 'https://www.strava.com/api/v3/activities/'

	request({
		url: apiCurrentAthlete,
		headers: {
			'Authorization': 'Bearer ' + access_token
		}
	}, function(err, response, body){
		res.locals.myData = JSON.parse(body);
		request({
			url: apiAthleteFriends,
			headers: {
				'Authorization' : 'Bearer ' + access_token
			}
		}, function(err, response, body){
			var dataFriends = JSON.parse(body);
			res.locals.myFriends = dataFriends;
			console.log(dataFriends);
			if (dataFriends.lenght < 10){
				for (var i = 0; i < dataFriends.length; i++) {
					request({
						url: apiAthleteFriends + dataFriends[i].id,
						headers: {
							'Authorization': 'Bearer ' + access_token
						}
					}, function(err, response, body){
						res.locals.friendsActivities = JSON.parse(body);
						res.render('main');
					})
				}
			} else {
				for (var i = 0; i < 10; i++) {
					request({
						url: apiAthleteFriends + dataFriends[i].id,
						headers: {
							'Authorization': 'Bearer ' + access_token
						}
					}, function(err, response, body){
						res.locals.friendsActivities = JSON.parse(body);
						res.render('main');
					})
				}
			}
		})
	})



});

module.exports = router;
