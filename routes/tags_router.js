var express = require("express");
var tags = express.Router();

tags.get('/tags/:id', function(req, res) {
  res.render("tags", {
      id: Number(req.params.id),
      items: req.app.get('postsFile').postsArray,
      tags: req.app.get('tagsFile').tagsArray
  });
});

module.exports = tags;
