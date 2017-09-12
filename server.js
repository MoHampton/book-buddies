var express = require('express');
var bodyParser = require("body-parser");

var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

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

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.get('/googleSignIn', function(req, res) {
  signIn.googleSignIn();
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