var ACS = require('acs-node'),
    logger = require('acs').logger

function index(req, res) {
  req.session.controller = "index";
  if(!req.session.user) {
    res.render('login', {
      layout: 'application',
      req: req
    });
  }else{
    var data = {
      per_page:1000,
      order:"-updated_at",
      where:"{\"user_id\":\""+req.session.user.id+"\"}"
    };
    ACS.Photos.query(data, function(e) {
      if(e.success && e.success === true){
        res.render('index', {
          layout: 'application',
          obj: e,
          req: req
        });
      }else{
        req.session.flash = {msg:e.message, r:0};
        res.redirect('/');
        logger.debug('Error: ' + JSON.stringify(e));
      }
    }, req, res);
  }
}

function login(req, res) {
  req.session.controller = "login";
  if(!req.session.user) {
    res.render('login', {
      layout: 'application',
      req: req
    });
  }else{
    res.redirect('/');
  }
}

function signup(req, res) {
  req.session.controller = "signup";
  if(!req.session.user) {
    res.render('login', {
      layout: 'application',
      req: req
    });
  }else{
    res.redirect('/');
  }
}

function page_not_found(req, res){
  res.send("page not found.");
}