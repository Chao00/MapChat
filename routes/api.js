var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* GET home page. */
router.get('/student', function(req, res, next) {
    Student.find({}, function(err, doc) {
        res.send(doc)
    })
});

router.get('/student/:id', function(req, res, next) {
    Student.findById(req.params.id, function(err, doc) {
        res.send(doc)
    });
});

router.post('/student', function(req,res,next) {

    if (req.body._id) {
        // Update student
        Student.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, function (err, doc) {
            res.send({data: doc, isNew: false});
        });

    } else {
        // Create new student
        var newStudent = new Student(req.body);
        newStudent.save(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                doc.isNew = true
                res.send({data: doc, isNew: true});
            }
        });
    }
});

router.delete('/student/:id', function(req, res) {
    var studentId = req.params.id;
    Student.findOneAndRemove({_id: studentId}, function(err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

module.exports = router;
