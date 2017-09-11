// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Require models for syncing
var db = require("./models");

// Express app data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    
// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing sequelize models and then starting Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
