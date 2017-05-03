var express = require('express');
var request = require('request');

var router = express.Router();

router.get('*', function(req, res){
	var code = req.query.code;
	// console.log(code);
	var postUrl = 'https://www.strava.com/oauth/token';
	console.log('post', {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: code
	})
	//
	// request.post(postUrl,{
	// 	client_id: process.env.CLIENT_ID,
	// 	client_secret: process.env.CLIENT_SECRET,
	// 	code: code
	// }, function (err, result, body){
	// 	console.log(err, result, body);
	// })
	//
	// request.post(postUrl, {form:{
	// 	client_id: process.env.CLIENT_ID,
	// 	client_secret: process.env.CLIENT_SECRET,
	// 	code: code
	// }}, function (err, result, body){
	// 	console.log(err, result, body);
	// })

	request.post({url:postUrl, form: {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: code
	}}, function(err,httpResponse,body){
		console.log(body)
	})

	res.render('oauth');
});

module.exports = router;
