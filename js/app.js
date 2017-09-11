$(document).foundation()

function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log("sign in success")
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("user:", user);
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("sign in error:", errorCode, errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

$(".login-box-social-button-google").click(function (e) { 
  e.preventDefault();
  console.log("Google button clicked");
  googleSignIn();
});