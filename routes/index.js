var express = require('express');
var router = express.Router();


module.exports = function(User){
	/* GET home page. */
		router.get('/', function(req, res, next) {
		  res.render('index', { title: 'Express' });
		});

		router.get('/setup', function(req, res, next) {
		  var user = new User({
		  	username : "Ajay",
		  	password : "password",
		  	admin : true
		  });

		  user.save(function(err, results){
		  	if(err) throw err;

		  	console.log('User saved successfully!');	
		  	res.json({success : true})

		  });
		  
		});

		router.get('/users', function(req, res, next) {
		 	User.find({} , function (err , users) {
		 		res.send('<div>List of users</div><br/>'+users[0].username);
		 	});
		  
		});



		return router;
}
