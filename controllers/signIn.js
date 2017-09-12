var firebase = require('firebase');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBq75ygfcq_VsDP2UkBwRjgGabwWS-gZJg",
  authDomain: "book-buddies-b7e5a.firebaseapp.com",
  databaseURL: "https://book-buddies-b7e5a.firebaseio.com",
  projectId: "book-buddies-b7e5a",
  storageBucket: "book-buddies-b7e5a.appspot.com",
  messagingSenderId: "582731739757"
};
firebase.initializeApp(config);

// Initialize Firebase admin
var admin = require("firebase-admin");

var serviceAccount = require("../config/book-buddies-b7e5a-firebase-adminsdk-qya3g-ac91129f5a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://book-buddies-b7e5a.firebaseio.com"
});

module.exports = {
  googleSignIn: function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      console.log("sign in success")
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("user:", user);
      $("#LoginModal").foundation('close');
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("sign in error:", errorCode, errorMessage)
    });
  },
  facebookSignIn: function() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log("user:", user);
      $("#LoginModal").foundation('close');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("sign in error:", errorCode, errorMessage)
    });
  },
  twitterSignIn: function() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      // The signed-in user info.
      var user = result.user;
      console.log("user:", user);
      $("#LoginModal").foundation('close');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("sign in error:", errorCode, errorMessage)
    });
  }
}