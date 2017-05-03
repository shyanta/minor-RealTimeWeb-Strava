var express = require('express');
var request = require('request');

var router = express.Router();

router.get('*', function(req, res){
	var code = req.query.code;
	var postUrl = 'https://www.strava.com/oauth/token';
	var data;

	res.render('oauth');

	request.post({url:postUrl, form: {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: code
	}}, function(err,httpResponse,body){
		data = body;
		res.redirect('/main', {data});
	})
	// req.app.set('tokenData', data);
});

module.exports = router;
