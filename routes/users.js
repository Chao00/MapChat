var express = require('express');
var passport = require('passport');
var Student = require('../models/students');
var router = express.Router();

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/chat');
});

router.get('/register', function(req, res) {
    res.render('register', { });
});

router.post('/register', function(req, res) {
    Student.register(new Student({ username : req.body.username }), req.body.password, function(err, student) {
        if (err) {
            return res.render('register', { student : student });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/chat');
        });
    });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;