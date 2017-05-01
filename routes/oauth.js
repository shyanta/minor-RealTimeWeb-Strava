var express = require('express');

var router = express.Router();

router.get('*', function(req, res){
	var code = req.query.code;
	req.app.set('code', code);
	res.render('oauth');

});

module.exports = router;
