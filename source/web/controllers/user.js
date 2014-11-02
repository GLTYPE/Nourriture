// USER CONTROLLER

var mongoose = require("mongoose")

exports.createUser = function createUser(req, res) {
    var User = require('...models/user.js').User({
	name: req.body.name,
	email: req.body.email,
	about: req.body.about,
	role: req.body.role,
	password: req.body.password
    }).save(function(err) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send();
	res.end();
    });
}

exports.getUserByEmail = function getUserByEmail(req, res) {
    var User = require('../models/user.js').User;

    User.findOne({email: req.body.email}, function(err, user) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(user);
	res.end();
    });
}

exports.getAllUsers = function getAllUsers(req, res) {
    var User = require('../models/user.js').User;

    User.find(function(err, user) {
	if (err)
	    res.status(400).send(err);
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
