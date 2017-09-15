var db = require('../models');

module.exports = function(app) {
  // POST request to create club
  // (POST request to create user is handled in auth-routes.js)
  // GET request for all clubs?
  // GET request for individual club (by ID)?
  // ditto for users?
  // PUT routes for updating club and user info

  // PUT route to add a user to a club
  app.post("/join/:ClubId/:UserId", function(req, res) {
    console.log("req.params:", req.params);
    db.Association.create(req.params);
  });
}