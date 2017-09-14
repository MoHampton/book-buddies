var express = require('express');
var bodyParser = require("body-parser"); //does this need to be after app=express()?

var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

var passport = require('passport');
var session = require('express-session');

// Require models for syncing
var db = require("./models");

// Express app data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
app.use(session({ secret: 'monarchy',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// load passport strategies
require('./config/passport/passport.js')(passport, db.User);

Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

var authRoute = require('./routes/auth-routes.js')(app, passport);

app.use(express.static('./public/'));

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Syncing sequelize models and then starting Express app
// TODO: remove "force: true" before deploying
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});