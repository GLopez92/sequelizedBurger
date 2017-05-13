var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static(process.cwd() +  "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(require("./routes/api-routes.js"));
app.use(require("./routes/view-routes.js"));



db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});