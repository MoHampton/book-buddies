module.exports = function(app) {
  // on get '/' render index.html, aka splash screen

  // on get '/dashboard' render contents of bookclubs.html, w differentiation for users in clubs / not in clubs

  // on get '/club:id' render contents of club.html, customized w data from individual club, as determined by req.params.id
  
  // other views:
  // signup / sign in / sign out--are the signin / signup forms two different views that get injected into the modal?
  // On signout, what changes?
  // Are there areas of index.hbs that change based on signin/signout?
}