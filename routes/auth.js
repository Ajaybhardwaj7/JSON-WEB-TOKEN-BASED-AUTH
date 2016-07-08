var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');



module.exports = function(User , secretData){
		/* GET token */
router.get('/authenticate', function(req, res, next) {
			res.render('authenticate' , {title : 'Authentication'});
		});

router.post('/authenticate', function(req, res, next) {
 	User.findOne({username : req.body.username} , function(err , user){
	 		if(!user){
	 			res.send('User not found!');
	 			
	 		}else if( user.password != req.body.password){
	 			res.send('Authentication Failed !');
	 		}
	 		else if(user.password === req.body.password){
	 			console.log('user logged successfully');

	 			var token = jwt.sign(user , secretData);

	 			res.cookie('jwt' , token , {httponly : true , maxAge : 900000});

	 			res.redirect('/api/users');

	 		}
 		})
  
	});

	return router;
}
