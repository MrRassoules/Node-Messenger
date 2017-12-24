var express = require('express');
var router = express.Router();


/* GET home page */
chat_id = get_chat_id();
/* GET chat id. */
function get_chat_id(){
	var type;
	var chat_id = "";
	for(var i = 1; i <= 32; i++){
		type = Math.random() * 2;
		if(type == 1){
			chat_id += Math.random() * 9;
		}
		else{
			var letter = String.fromCharCode(97 + Math.random() * 25 + 0);
			chat_id += letter;
		}
	}
	return chat_id;
}

router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Private Messenger',
  		chat_id: chat_id,
	});
});

module.exports = router;
