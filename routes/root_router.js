var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('postsFile').nieuws,
    categorieen: req.app.get('categoriesFile').categorieen
  });
});

module.exports = root;
