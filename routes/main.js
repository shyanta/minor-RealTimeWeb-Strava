var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	var data = req.app.get('tokenData');
	console.log(data);

	res.render('main');
});

module.exports = router;
