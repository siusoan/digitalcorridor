var express = require("express");
var path = require("path");
var app = express();

app.set('postsFile', require('./config/posts.json'));
app.set('tagsFile', require('./config/tags.json'));
app.set('aboutFile', require('./config/about.json'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/posts_router"));
app.use(require("./routes/tags_router"));
app.use(require("./routes/about_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
