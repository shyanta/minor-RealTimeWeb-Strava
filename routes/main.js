var express = require('express');

var router = express.Router();

router.get('/', function(req, res){

	res.send(res);
	// res.render('main');
});

module.exports = router;
