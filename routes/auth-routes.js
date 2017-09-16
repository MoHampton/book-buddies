var db = require('../models');

module.exports = function (app, passport) {

  // new user signup:
  app.post('/signup', 
    passport.authenticate('local-signup', {
      successRedirect: '/user',
      failureRedirect: '/signup'
    }));

  // returning user signin:
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/user',
    failureRedirect: '/signin'
  }
  ));

  app.get('/user', isLoggedIn, function (req, res) {
    // (no clubs joined? show "Select a club" text and list of all clubs.
    // Use has joined clubs? show user's clubs w "Your clubs" text, and recommended clubs.)
    console.log(req.user);
    var userData = req.user
    res.render("user", userData);
  });

  app.get('/ubookclubs', isLoggedIn, function (req, res) {
    db.Club.findAll()
    .then(function(dbClubs) {
      var hbObject = {
        clubs: dbClubs,
        userData: req.user
      }
      console.log("hbObject:", hbObject);
      res.render("ubookclubs", hbObject);
    });
  });

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