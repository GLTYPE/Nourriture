// USER CONTROLLER

var mongoose = require("mongoose")
var md5 = require('MD5');

exports.createUser = function createUser(req, res) {
    var User = require('../models/user.js').User({
	firstname: req.body.firstname,
	lastname: req.body.lastname,
	email: req.body.email,
	about: req.body.about,
	role: req.body.role,
	password: md5(req.body.password)
    }).save(function(err) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send();
	res.end();
    });
}

exports.getUserByEmail = function getUserByEmail(email, password, callback) {
    var User = require('../models/user.js').User;

    User.findOne({email: email}, callback);
}

exports.getAllUsers = function getAllUsers(req, res) {
    var User = require('../models/user.js').User;

    User.find(function(err, user) {
	if (err)
	    res.status(400).send(err);
	// user.forEach(function(element, index, array) {
	//     console.log(array[index].password);
	//     delete array[index].password;
	//     console.log(array[index]);
	// });
	res.status(200).send(user);
	res.end();
    });
}

exports.getUserById = function getUserById(req, res) {
    var User = require('../models/user.js').User;

    User.findById(req.params.idUser, function(err, user) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(user);
	res.end();
    });
}

exports.getUserByName = function getUserByName(req, res) {
    var User = require('../models/user.js').User;

    User.find({name: new RegExp(req.params.name, "i")}, function(err, user) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(user);
	res.end();
    });
}
