// I thought I'd initialize the app here and export it but I'm not sure about that.
// This is for *admin* initialization, not firebase.initializeApp...
var admin = require("firebase-admin");

var serviceAccount = require("./../config/book-buddies-b7e5a-firebase-adminsdk-qya3g-ac91129f5a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://book-buddies-b7e5a.firebaseio.com"
});