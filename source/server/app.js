var express = require('express');
var app = express();

/*-------- HOME --------*/
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Here\'s home !');
});
/*----------------------*/

/*-------- SEARCH --------*/
app.get('/search/:criteria', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest or user, you\'re looking for : ' + req.params.criteria);
});
/*------------------------*/

/*-------- SIGN UP --------*/
app.get('/signup', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest, you\'re signing up');
});
/*-------------------------*/

/*-------- SIGN IN --------*/
app.get('/signin', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re signing in');
});
/*-------------------------*/

/*-------- DISCONNECT --------*/
app.get('/disconnect', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re disconnecting');
});
/*----------------------------*/

/*-------- PROFIL --------*/
app.get('/profil', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re looking at your own profil page ');
});

app.get('/profil/edit', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re editing your own profil');
});
/*------------------------*/


/*-------- ADMIN --------*/
app.get('/edit/:idUser', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an admin, you\'re editing the settings of the user with id : ' + req.params.idUser);
});
/*-----------------------*/

/*-------- PRODUCT --------*/
app.get('/products', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest or a user, you\'re listing  products');
});

app.get('/product/create', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an food supplier, you\'re creating a product');
});

app.get('/product/edit/:productName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an food supplier, you\'re editing the settings of the product named : ' + req.params.productName);
});

app.get('/product/remove/:productName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an food supplier, you\'re removing the settings of the product named : ' + req.params.productName);
});

app.get('/product/:productName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest or a user, you\'re on the product page of : ' + req.params.criteria);
});

app.get('/product/promote/:productName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an food supplier, you\'re promoting the product named : ' + req.params.productName);
});
/*-------------------------*/

/*-------- STATS --------*/
app.get('/stats', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As an food supplier, you\'re looking stats');
});
/*-----------------------*/

/*-------- RECEIPE --------*/
app.get('/receipes', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user or a guest, you\'re listing receipes');
});

app.get('/receipe/create', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re creating a receipe');
});

app.get('/receipe/remove/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re removing a receipe named : ' + req.params.receipeName);
});

app.get('/receipe/edit/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re editing a receipe named : ' + req.params.receipeName);
});

app.get('/receipe/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a You\'re looking at receipe profil named : ' + req.params.receipeName);
});

app.get('/receipe/share/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re sharing a receipe named : ' + req.params.receipeName);
});

app.get('/receipe/movies', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re listing your movies of receipes creation');
});

app.get('/receipe/movies/add', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re adding a receipe movie');
});
app.get('/receipe/movies/edit/:videoName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re editing a receipe movie named : ' + req.params.videoName);
});
app.get('/receipe/movies/remove/:videoName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re removing a receipe : ' + req.params.videoName);
});

app.get('/receipes/suggestion', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re listing suggested receipes');
});
/*-------------------------*/

/*-------- INGREDIENTS --------*/
app.get('/ingredients', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest or a user, you\'re listing ingredient');
});

app.get('/ingredient/create', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re creating a ingredient');
});

app.get('/ingredient/remove/:ingredientName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re removing a ingredient named : ' + req.params.ingredientName);
});

app.get('/ingredient/edit/:ingredientName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a gastronomist, you\'re editing a ingredient named : ' + req.params.ingredientName);
});

app.get('/ingredients/:ingredientName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a guest or a user, you\'re looking the profil page of the ingredient : ' + req.params.ingredientName);
});
/*-----------------------------*/

/*-------- FAVORITES --------*/
app.get('/favorites', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a consumer, you\'re listing your favorites');
});

app.get('/favorite/add/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a consumer, you\'re adding a favorite receipe named : ' + req.params.receipeName);
});

app.get('/favorite/edit/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a consumer, you\'re editing a favorite receipe named : ' + req.params.receipeName);
});

app.get('/favorite/remove/:receipeName', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a consumer, you\'re removing a favorite receipe named : ' + req.params.receipeName);
});
/*-----------------------------*/

/*-------- MOMENTS --------*/
app.get('/moments', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re listing your moments');
});

app.get('/moment/create', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re creating a moment');
});

app.get('/moments/edit/:momentId', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re editing the moment with the id : ' + req.params.momentId);
});

app.get('/moments/remove/:momentId', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re removing the moment with id : ' + req.params.momentId);
});

app.get('/moments/share/:momentId', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('As a user, you\'re sharing the moment with id : ' + req.params.momentId);
});
/*-------------------------*/

app.listen(5000);