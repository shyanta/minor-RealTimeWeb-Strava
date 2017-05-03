var express = require('express');

var router = express.Router();

router.get('*', function(req, res){
	// var code = req.query.code;
	// var postUrl = 'https://www.strava.com/oauth/token/';
	//
	// request.post(postUrl, {
	// 	client_id: process.env.CLIENT_ID,
	// 	client_secret: process.env.CLIENT_SECRET,
	// 	code: code
	// })

	res.render('oauth');
});

module.exports = router;
