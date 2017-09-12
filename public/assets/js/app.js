// function googleSignIn() {
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function (result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     console.log("sign in success")
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log("user:", user);
//     $("#LoginModal").foundation('close');
//   }).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     console.log("sign in error:", errorCode, errorMessage)
//   });
// }

// function facebookSignIn() {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     console.log("user:", user);
//     $("#LoginModal").foundation('close');
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     console.log("sign in error:", errorCode, errorMessage)
//   });
// }

// function twitterSignIn() {
//   var provider = new firebase.auth.TwitterAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
//     // You can use these server side with your app's credentials to access the Twitter API.
//     var token = result.credential.accessToken;
//     var secret = result.credential.secret;
//     // The signed-in user info.
//     var user = result.user;
//     console.log("user:", user);
//     $("#LoginModal").foundation('close');
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     console.log("sign in error:", errorCode, errorMessage)
//   });
// }

// $(".login-box-social-button-google").click(function (e) {
//   e.preventDefault();
//   googleSignIn();
// });

// $(".login-box-social-button-facebook").click(function (e) {
//   e.preventDefault();
//   facebookSignIn();
// });

// $(".login-box-social-button-twitter").click(function (e) {
//   e.preventDefault();
//   twitterSignIn();
// });