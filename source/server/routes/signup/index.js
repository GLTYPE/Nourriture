module.exports = function(router) {
    router.route('/signup').get(function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	if (req.session.userId) { res.end("Connected as " + req.session.name); }
	else {
	    res.end('<!DOCTYPE html>' +
		    '<head>' +
		    '</head>' +
		    '<body>' +
		    '<p>As a guest, you\'re signing up : </p>' +
		    '<form id="signupForm">' +
		    'First name: <input type="text" name="firstname"><br>' +
		    'Last name: <input type="text" name="lastname"><br>' +
		    'email: <input type="text" name="email"><br>' +
		    'password: <input type="text" name="password"><br>' +
		    'role: <input type="text" name="role"><br>' +
		    '<input type="submit" value="Submit">' +
		    '</form>' +
		    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>' +
		    '<script type="text/javascript" src="/js/signupform.js"></script>' +
		    '</body></html>'
		   );
	}
    });
};
