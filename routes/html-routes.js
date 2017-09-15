var db = require('../models');

module.exports = function(app) {
  // on get '/' render contents of index.html, aka splash screen
  app.get('/', function(req, res) {
    // no sequelize stuff needed?
    console.log(req.user)
    res.render("index");
  })

  // on get '/ubookclubs' render contents of ubookclubs.html
    // That's a job for auth-routes.js, since it's auth-protected

  // on get '/club:id' render contents of club.html, customized w data from individual club, as determined by req.params.id
  
  // other views:
  // signup / sign in / sign out--are the signin / signup forms two different views that get injected into the modal?
  // On signout, what changes?
  // Are there areas of index.hbs that change based on signin/signout?
}