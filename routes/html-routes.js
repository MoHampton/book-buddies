var db = require('../models');

module.exports = function(app) {
  // on get '/' render contents of index.html, aka splash screen
  app.get('/', function(req, res) {
    console.log("req.user:", req.user);
    // insert a isLoggedIn check--maybe move this whole route into auth-routes--and if logged in redirect
    res.render("index");
  });
  
  // on get '/club:id' render contents of club.html, customized w data from individual club, as determined by req.params.id
  app.get('/club:id', function(req, res) {
    // I need to find one club and get its data.
    // I need to find many Users and get their data.
    // I will find them based on whether their id shows up next to the club id in Associations.
    var hbObject = {
      // store the data of the *current* (authenticated, visiting) user
      userData: req.user
    }
    // store IDs of club members in a temporary array
    var members = [];
    // db.Association.findAll({
    //   where: {
    //     ClubId: req.params.id
    //   },
    //   include: [db.User]
    // }).then(function(dbUsers) {
    //   console.log('dbUsers:', dbUsers)
    //   // hbObject.members = dbUsers.dataValues;
    // })
    db.Club.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Schedule],
      include: [db.Association]
    }).then(function(dbClub) {
      // console.log("dbClub:", dbClub);
      console.log("Associations", dbClub.Associations);
      dbClub.Associations.forEach(function(element) {
        members.push(element.dataValues.UserId);
      });
      // store member IDs in temporary array
      console.log('members:', members);
      // store club data on hbObject
      hbObject.clubData = dbClub.dataValues;
    }).then(function(){
      db.User.findAll({
        // limit findAll search to the stored array of IDs
        where: {id: members}
      }).then(function(dbUsers) {
          console.log('dbUsers:', dbUsers)
          hbObject.members = dbUsers;
          console.log("hbObject:", hbObject);
          res.render("club", hbObject);
        });
    });
    // console.log(req);
  });
  
}