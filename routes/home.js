var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res){
	request('api', function(error, response, data){
		
	})
	res.render('index');
});

module.exports = router;
