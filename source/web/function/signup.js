var User = require('../controllers/user.js');

exports.signup = function signup(req, res) {
    if (!req.body.firstname || req.body.firstname.length == 0 ||
	req.body.firstname.length > 20)
    	return res.status(400).end("Error firstname (Caracter number must be between 1 and 20)");
    if (!req.body.lastname || req.body.lastname.length == 0 ||
	req.body.lastname.length > 50)
    	return res.status(400).end("Error lastname (Caracter number must be between 1 and 50)");
    if (!req.body.email || req.body.email.length == 0 ||
	req.body.email.length > 50)
    	return res.status(400).end("Error email (Caracter number must be between 1 and 50)");
    if (!req.body.role || parseInt(req.body.role) < 0 || parseInt(req.body.role) > 3)
    	res.status(400).end("Error role");
    if (!req.body.password || req.body.password.length < 8 ||
	req.body.password.length > 20)
    	return res.status(400).end("Error password (Caracter number must be between 8 and 20)");
    User.createUser(req, res);
    res.status(201).end();
}
