var ACS = require('acs').ACS,
    logger = require('acs').logger

function signup(req, res) {
  var data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.pw,
    password_confirmation: req.body.pw_c
  };
  
  ACS.Users.create(data, function(data) {
    if(data.success) {
      var user = data.users[0];
      if(user.first_name && user.last_name) {
        user.name = user.first_name + ' ' + user.last_name;
      } else {
        user.name = user.username;
      }
      req.session.user = user;
      res.redirect('/');
      logger.info('Created user: ' + user.name);
    } else {
      req.session.flash = {msg:data.message, r:0};
      req.session.controller = "signup"
      res.render('login', {
        layout: 'application',
        req: req
      });
    }
  }, req, res);
}