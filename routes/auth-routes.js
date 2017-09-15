//var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
  // app.get('/signup', authController.signup);

  // app.get('/signin', authController.signin);

  // The above is copied from the tutorial.
  // What is it really saying?
  // In the "controllers" folder, authcontroller.js says to handlebars-render the handlebars view 'signup'.
  // Here, in the routes folder, it says
  // when we GET '/signup', do that rendering.

  // What will we ultimately need, assuming we want to keep the login component a nice little modal?
  // user will click button to open modal--Foundation's problem, not ours.
  // User will POST either new or returning user data,
  // and then we'll route it to an auth API

  // new user signup:
  app.post('/signup', 
    passport.authenticate('local-signup', {
      successRedirect: '/user',
      failureRedirect: '/signup'
    }));
  // Thoughts: how do I use authentication state to load sub-portions of pages via routing?

  // returning user signin:
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/user',
    failureRedirect: '/signin'
  }
  ));

  app.get('/user', isLoggedIn, function (req, res) {
    // replace w real res.render, providing content currently in bookclubs.html,
    // preferably w differentiation based on user data
    // (no clubs joined? show "Select a club" text and list of all clubs.
    // Use has joined clubs? show user's clubs w "Your clubs" text, and recommended clubs.)
    console.log(req.user);
    var userData = req.user
    res.render("user", userData);
  });

  // app.get('/ubookclubs', isLoggedIn, authController.ubookclubs);

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      res.redirect('/');
    })
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
  }
}