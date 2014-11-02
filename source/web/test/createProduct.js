var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/test_in');

var Product = require('../models/product.js').Product;

var myProduct = new Product({
    name: process.argv[2],
    picture: "No pic",
    description: "Worst product ever",
    rate: 5,
    brand: "Gilles's compagny",
    values: process.argv[3]
}).save(function (err) {
    if (err) {throw err;}
    console.log("Done");
    mongoose.connection.close();
});
