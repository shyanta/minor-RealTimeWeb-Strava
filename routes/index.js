var express = require('express');

var router = express.Router();
var clientId = process.env.CLIENT_ID;

router.get('/', function(req, res){
	res.locals.clientId = clientId;
	res.render('index');
});

module.exports = router;
