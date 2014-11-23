module.exports = function(router) {
    router.route('/logout').get(function(req, res) {
	var request = require('request');

	res.setHeader('Content-Type', 'text/html');
	req.session.destroy(function(err) {
            if (err)
		res.end("Internal error");
            else
		res.end('As a user, you\'re disconnecting');
	});
    });
}
