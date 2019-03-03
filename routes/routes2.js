var express = require('express');
var router = express.Router();
var fs = require('fs');
var contents = fs.readFileSync('colors.json', 'utf8');
var jsonContent = JSON.parse(contents);
//console.log(contents);


/* GET home page. */
router.get('/all', function(req, res, next) {
  res.send(jsonContent);
});

router.get('/:color', function(req, res, next){
	for (var i = 0; i < jsonContent.colors.length; i++){
		var change = jsonContent.colors[i].color;
		//res.send(req.params.color);
		res.send(change);
	 }
	});


module.exports = router;


