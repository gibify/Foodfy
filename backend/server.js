const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require('./data');

server.use(express.static('public'));
server.use(express.static('assets'));

server.set("view engine", "njk");

nunjucks.configure("views", {
     express:server,
     autoescape: false,
     noCache: true
});

server.get("/", function(req, res) {
     return res.render("home", { items: recipes});
});

server.get("/about", function(req, res) {
     return res.render("about");
});

server.get("/recipes", function(req, res) {
     return res.render("recipes", { items: recipes });
});

server.get("/recipe/:index", function(req, res) {
     const recipeIndex = req.params.index;

     const recipes = [];
     return res.render(recipes[recipeIndex]);
});

server.listen(3000, function() {
     console.log('server is runing');
});