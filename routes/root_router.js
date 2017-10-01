var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    posts: req.app.get('postsFile').postsArray,
    tags: req.app.get('tagsFile').tagsArray
  });
});

module.exports = root;
