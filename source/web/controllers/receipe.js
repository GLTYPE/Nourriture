// RECEIPE MODEL

var mongoose = require("mongoose")


exports.getAllReceipes = function getAllReceipes(req, res) {
    var Receipe = require('../models/receipe.js').Receipe;

    Receipe.find(function(err, receipe) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(receipe);
	res.end();
    });
}

exports.getReceipeById = function getReceipeById(req, res) {
    var Receipe = require('../models/receipe.js').Receipe;

    Receipe.findById(req.params.idReceipe, function(err, receipe) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(receipe);
	res.end();
    });
}

exports.getReceipeByName = function getReceipeByName(req, res) {
    var Receipe = require('../models/receipe.js').Receipe;

    Receipe.find({name: new RegExp(req.params.name, "i")}, function(err, receipe) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(receipe);
	res.end();
    });
}

exports.getReceipeByCriteria = function getReceipeByCriteria(req, res) {
    var Receipe = require('../models/receipe.js').Receipe;

    Receipe.find({
	name: new RegExp(req.params.name, "i"),
	values: { $gte: req.params.minCal, $lte: req.params.maxCal},
	rate: { $gte: req.params.rateMin, $lte: req.params.rateMax},
    }, function(err, receipe) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(receipe);
	res.end();
    });
}
