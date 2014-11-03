var User = require('../controllers/user.js'),
md5 = require('MD5');

exports.login = function login(req, res) {
    if (!req.body.email || req.body.email.length == 0)
	return (res.status(400).end("Email missing"));
    if (!req.body.password || req.body.password.length == 0)
	return (res.status(400).end("Password missing"));
    User.getUserByEmail(req.body.email, req.body.password, function(err, user) {	
    	if (err)
    	    return (res.status(400).end(err));
    	if (!user)
    	    return (res.status(400).end("Email incorrect"));
    	else if (user.password != md5(req.body.password))
    	    return (res.status(400).end("Password incorrect"));
    	else
    	    res.status(200).send(user);
    });
}
