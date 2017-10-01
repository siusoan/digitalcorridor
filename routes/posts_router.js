var express = require("express");
var posts = express.Router();

posts.get('/items/:id', function(req, res) {
  var postsFile = req.app.get('postsFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < postsFile.postsArray.length ) {
    if (postsFile.postsArray[teller].id == id) {
      item = postsFile.postsArray[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("post", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = posts;
