// INGREDIENT CONTROLLER

var mongoose = require("mongoose")

exports.getAllIngredients = function GetAllIngredients(req, res) {
    var Ingredient = require('../models/ingredient.js').Ingredient;

    Ingredient.find(function(err, ingredient) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(ingredient);
    res.end();
    });
}

exports.getIngredientById = function GetIngredientById(req, res) {
    var Ingredient = require('../models/ingredient.js').Ingredient;

    Ingredient.findById(req.params.id, function(err, ingredient) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(ingredient);
    res.end();
    });
}

exports.getIngredientByName = function GetIngredientByName(req, res) {
    var Ingredient = require('../models/ingredient.js').Ingredient;

    Ingredient.find({name: new RegExp(req.params.name, "i")}, function(err, ingredient) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(ingredient);
    res.end();
    });
}

exports.getIngredientValues = function GetIngredientValues(req, res) {
    var Ingredient = require('../models/ingredient.js').Ingredient;

    Ingredient.findById(req.params.id, function(err, ingredient) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(ingredient.value.toString());
    res.end();
    });
}

exports.getIngredientByCriteria = function getIngredientByCriteria(req, res) {
    var Ingredient = require('../models/ingredient.js').Ingredient;

    Ingredient.find({
	name: new RegExp(req.params.name, "i"),
	values: { $gte: req.params.minCal, $lte: req.params.maxCal}
	// ,rate: { $gte: req.params.rateMin, $lte: req.params.rateMax},
    }, function(err, ingredient) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(ingredient);
	res.end();
    });
}
