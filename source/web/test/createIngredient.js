var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/test_in');

var Ingredient = require('../models/ingredient.js').Ingredient;

var myIngredient = new Ingredient({
    name: process.argv[2],
    picture: "No pic",
    description: "Worst product ever",
    rate: [{rateNumber:1, rateValue:5}],
    brand: "Gilles's compagny",
    values: process.argv[3]
}).save(function (err) {
    if (err) {throw err;}
    console.log("Done");
    mongoose.connection.close();
});
