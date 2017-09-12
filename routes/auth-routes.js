var authController = require('../controllers/authcontroller.js');

module.exports = function(app) {
   app.get('/signup', authController.signup);
}

// The above is copied from the tutorial.
// What is it really saying?
// In the "controllers" folder, authcontroller.js says to handlebars-render the handlebars view 'signup'.
// Here, in the routes folder, it says
// when we GET '/signup', do that rendering.

// What will we ultimately need, assuming we want to keep the login component a nice little modal?
// user will click button to open modal--Foundation's problem, not ours.
// User will POST either new or returning user data,
// and then we'll route it to an auth API