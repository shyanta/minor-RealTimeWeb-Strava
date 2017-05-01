var express = require('express');
var request = require('request');

var router = express.Router();
var clientId = process.env.CLIENT_ID;

router.get('/', function(req, res){
	request('api', function(error, response, data){

	})
	res.locals.clientId = clientId;
	res.render('index');
});

module.exports = router;
