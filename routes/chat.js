var express = require('express');
var firebase = require('firebase');
var router = express.Router();
var crypto = require('crypto');
var sha256 = require("js-sha256");
var dateTime = new Date();

/* GET users listing. */
router.get('/chat', function(req, res) {
  res.render('chat', {
  	chat_id: chat_id,
  	hour: dateTime.getHours(),
  	minute: dateTime.getMinutes(),
  	second: dateTime.getSeconds(),
  });
});

module.exports = router;
