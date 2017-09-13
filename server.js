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
require('./config/passport/passport.js')(passport, db.user);

// TODO: reinstate these after they're built out and are actually exporting
// Routes
// require("./routes/api-routes")(app);
// require("./routes/html-routes")(app);

var authRoute = require('./routes/auth-routes.js')(app, passport);

// TODO: remove this temporary testing route
app.get('/', function(req, res) {
  res.send('Welcome!');
});

app.use(express.static('./public/'));

// set up Firebase tools
// var admin = require("firebase-admin");

// var serviceAccount = require("./config/book-buddies-b7e5a-firebase-adminsdk-qya3g-ac91129f5a.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://book-buddies-b7e5a.firebaseio.com"
// });

// Syncing sequelize models and then starting Express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});