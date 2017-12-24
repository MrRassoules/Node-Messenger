var express = require('express');
var firebase = require('firebase');
var router = express.Router();
var dateTime = new Date();

/* GET users listing. */
router.get('/chat/:chat_id', function(req, res) {
	
	res.render('messenger', {
		chat_id: req.params.chat_id,
		chat_title: req.body.chat_title,
	});
});

module.exports = router;
