// PRODUCT MODEL

var mongoose = require("mongoose")

exports.getAllProduct = function GetAllProduct(req, res) {
    var Product = require('../models/product.js').Product;

    Product.find(function(err, product) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(product);
    res.end();
    });
}

exports.getProductByName = function GetProductByName(req, res) {
    var Product = require('../models/product.js').Product;

    Product.find({name: new RegExp(req.params.name, "i")}, function(err, product) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(product);
    res.end();
    });    
}

exports.getProductById = function GetProductById(req, res) {
    var Product = require('../models/product.js').Product;

    Product.findById(req.params.id, function(err, product) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(product);
    res.end();
    });    
}

exports.getProductByIngredientName = function GetProductByProductName(req, res) {
    var Product = require('../models/product.js').Product;

    Product.find({ings: req.params.name}, function(err, product) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(product);
    res.end();
    });
}

exports.getProductByCriteria = function getProductByCriteria(req, res) {
    var Product = require('../models/product.js').Product;

    Product.find({
	name: new RegExp(req.params.name, "i"),
	values: { $gte: req.params.minCal, $lte: req.params.maxCal},
	rate: { $gte: req.params.rateMin, $lte: req.params.rateMax},
    }, function(err, product) {
	if (err)
	    res.status(400).send(err);
	res.status(200).send(product);
	res.end();
    });
}
