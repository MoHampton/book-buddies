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
    // e.g. {ClubId: '1', UserId: '11'}
    db.Association.findOrCreate({
      // creates association if it doesn't already exist
      where: req.params
    });
  });

  app.post("/join/:ClubId", function(req, res) {
    res.send("You must log in first");
  });

  app.post('/', function(req, res) {
    console.log('req.body:', req.body);
    db.Club.create({
      clubName: req.body.clubName,
      genre: req.body.genre,
      description: req.body.description,
      location: req.body.location,
      moderator: req.body.moderator, // or user data passed in?
      currentBook: req.body.currentBook,
      nextBook: req.body.nextBook,
      photo: req.body.photo
    }).then(function(dbResponse) {
      // sequelize find for the new club
      console.log("dbResponse:", dbResponse);
      res.redirect('/club' + dbResponse.dataValues.id);
    })
  })
}