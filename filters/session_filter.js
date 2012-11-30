var ACS = require('acs').ACS,
    logger = require('acs').logger

function checkUserSession(req, res, next) {
  if(!req.session.user && req.url !== "/" && req.url !== "/login" && req.url !== "/logout" && req.url !== "/signup"){
    req.session.flash = {msg:"Please login first.",r:0};
    res.render('login', {
      layout: 'application',
      req: req
    });
    return;
  }

  if(req.session.flash && req.session.flash.r == 0){
    req.session.flash.r = 1;
  }else{
    req.session.flash = {};
  }

  next();
}