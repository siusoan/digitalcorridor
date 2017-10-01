var express = require("express");
var about = express.Router();

about.get('/:id', function(req, res) {
  var aboutFile = req.app.get('aboutFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < aboutFile.aboutArray.length ) {
    if (aboutFile.aboutArray[teller].id == id) {
      item = aboutFile.aboutArray[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("about", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = about;
