// Config
var express = require("express"),
bodyParser = require('body-parser'),
app = express();
mongoose = require('mongoose');

// Controllers
Product = require('./controllers/product.js'),
Receipe = require('./controllers/receipe.js');
Ingredient = require('./controllers/ingredient.js');
mongoose.connect('mongodb://localhost/test_in');

app.use(bodyParser.urlencoded({extended : false }));
app.get('/', function(req, res) {
    res.end("Welcome to the API");
});

app.get('/products', Product.getAllProduct);
app.get('/product/:id', Product.getProductById);
app.get('/product/name/:name', Product.getProductByName);
app.get('/product/ingredient/:ingredientName', Product.getProductByIngredientName);

app.get('/receipes', Receipe.getAllReceipes);
app.get('/receipe/:idReceipe', Receipe.getReceipeById);
app.get('/receipe/name/:name', Receipe.getReceipeByName);

app.get('/search/ingredients/:name/:minCal/:maxCal/:rateMin/:rateMax', Ingredient.getIngredientByCriteria);
app.get('/search/products/:name/:minCal/:maxCal/:rateMin/:rateMax', Product.getProductByCriteria);
app.get('/search/receipes/:name/:minCal/:maxCal/:rateMin/:rateMax', Receipe.getReceipeByCriteria);

app.get('/ingredients', Ingredient.getAllIngredients);
app.get('/ingredient/:id', Ingredient.getIngredientById);
app.get('/ingredient/name/:name', Ingredient.getIngredientByName);
app.get('/ingredient/:id/values', Ingredient.getIngredientValues);

app.listen(4242);
