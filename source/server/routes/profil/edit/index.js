module.exports = function(router) {
    router.route('/profil/edit').get(function(req, res) {
	var request = require('request');

	res.setHeader('Content-Type', 'text/html');
	if (req.session.userId) {
	    request.get({
		url: 'http://localhost:4242/users/' + req.session.userId },
		function(error, response, body) {
		    var user = JSON.parse(body);
		    res.end('<html>' +
			    '<body>' +
			    '<div id="idFormModified"><form id="editForm">' +
			    'Firstname : ' +
			    '<input type="text" name="firstname" value="' + user.firstname + '"/><br />' +
			    'Lastname : ' +
			    '<input type="text" name="lastname" value="' + user.lastname + '"/><br />' +
			    'Email : ' +
			    '<input type="text" name="email" value="' + user.email + '"/><br />' +
			    '<input type="hidden" name="id" value="' + user._id + '"/>' +
			    '<input type="submit" value="Send"/>' +
			    '</form></div>' +
			    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>' +
			    '<script type="text/javascript" src="/js/editform.js"></script>' +
			    '</body>' +
			    '</html>');
		});
	}
    });
}
