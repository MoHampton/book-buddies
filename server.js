var express = require('express');

var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static('./'));

// set up Firebase tools
// var admin = require("firebase-admin");

// var serviceAccount = require("./config/book-buddies-b7e5a-firebase-adminsdk-qya3g-ac91129f5a.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://book-buddies-b7e5a.firebaseio.com"
// });

app.listen(PORT, function() {
  console.log("Listening on port", PORT);
});