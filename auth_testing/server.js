// set up Firebase tools
var admin = require("firebase-admin");

var serviceAccount = require("./config/book-buddies-b7e5a-firebase-adminsdk-qya3g-ac91129f5a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://book-buddies-b7e5a.firebaseio.com"
});

console.log("ok")