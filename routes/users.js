var express = require('express');
var router = express.Router();
var passport = require('passport');
var Student = require('../models/student');

router.get('/login', function(req, res, next) {
  res.render('login', {})
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {})
});

router.post('/signup', function (req, res, next) {

  Student.register(new Student({username: req.body.username}), req.body.password, function(err, doc) {

    if (err) {
      return res.render('signup', { message: err})
    }

    passport.authenticate('local')(req, res, function() {
      res.redirect('/chat')
    })

  })

})

router.post('/login', passport.authenticate('local'), function(req, res, next) {
  res.render('chat', {user: req.user})
})

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/users/login');
})


module.exports = router;
