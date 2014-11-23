// HOME
module.exports = function(router) {
    router.route('/').get(function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.end('<html>Here\'s home !</html>');
    });
};
