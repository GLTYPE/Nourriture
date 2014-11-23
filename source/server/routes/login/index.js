module.exports = function(router) {
    router.route('/login')

    .get(function(req, res) {	
	res.setHeader('Content-Type', 'text/html');
	if (req.session.userId) { res.end("Connected as " + req.session.name); } else {
	    res.end('<html><p>As a guest, you\'re logining in : </p><form action="/login" method="post">' +
		    'email: <input type="text" name="email"><br>' +
		    'password: <input type="text" name="password">' +
		    '<input type="submit" value="Submit">' +
		    '</form></html>');
	}
    })
    .post(function(req, res) {
	request = require('request');
	request.post({
	    url: 'http://localhost:4242/users/connect',
	    form : {
    		email : req.body.email,
    		password : req.body.password
	    }},
    		     function (error, response, body) {
			 if (response.statusCode == 200) {
			     var user = JSON.parse(body);
			     req.session.userId = user._id;
			     req.session.name = user.firstname + " " + user.lastname;
			     res.redirect("http://localhost:5000/login");
			 }
			 else if (response.statusCode == 400) { res.end("Wrong password"); }
			 else { res.end("Internal problem happened"); }
    		     });	
    });
}
