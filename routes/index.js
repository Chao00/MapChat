var express = require('express');
var router = express.Router();
var Student = require('../models/student');
var path = require('path');
var appDir = path.dirname(require.main.filename);

// var clientDir = path.join(__dirname + '../client');

// GET Angular App HTML

router.get('/ng', function(req, res, next) {
    res.sendFile(appDir + '/client/index.html');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  Student.find({}, function(err, doc) {
      res.render('index', { title: 'WebDxD', name: 'Yan', students: doc });
  })
});

router.get('/new', function(req, res, next) {
  res.render('new', {})
});

router.get('/:id', function(req, res, next) {
  Student.findById(req.params.id, function(err, doc) {
    res.render('detail', {student: doc})
  });
});

router.post('/new', function(req,res,next) {

    var newStudent = new Student(req.body)
    newStudent.save(function(err,doc) {
      res.redirect('/student')
    })


});

module.exports = router;
