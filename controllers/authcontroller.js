var exports = module.exports = {}

exports.signup = function (req, res) {
  res.render('signup'); //won't work without hbars
}

// maybe an exports.signin

exports.user = function (req, res) {
  // replace w real res.render, providing content currently in bookclubs.html,
  // preferably w differentiation based on user data
  // (no clubs joined? show "Select a club" text and list of all clubs.
  // Use has joined clubs? show user's clubs w "Your clubs" text, and recommended clubs.)
  res.send("hi!" + req.params.id);
}

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect('/');
  })
}