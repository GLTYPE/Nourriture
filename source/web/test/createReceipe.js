var mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/test_in');

var Receipe = require('../models/receipe.js').Receipe;

var myReceipe = new Receipe({
    name: "ReceipeGilles",
    picture: "No pic",
    description: "Worst receipe ever",
    rate: 1,
    values: 10
}).save(function (err) {
    if (err) {throw err;}
    console.log("Done");
    mongoose.connection.close();
});
