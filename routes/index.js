var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hackhub');

var studentSchema = {
    firstName: String,
    lastName: String,
    school: String,
    enrolled: Boolean,
    age: Number
}

var Student = mongoose.model('Students', studentSchema, 'students');

/* GET home page. */
router.get('/', function(req, res, next) {
  Student.find().exec(function(err, doc) {
      res.render('index', { title: 'WebDxD', name: 'Yan', students: doc });
  })
});

module.exports = router;
