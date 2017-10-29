const express = require('express');
const router = express.Router();
const Students = require('../models/students');

// get request
router.get('/', (req, res, next) => {
  Students.find({}, (err, students) => {
    res.render('index', { title:'Student Table', name:'Michael', students });
  })
})

router.get('/:id', (req, res, next) => {
  Students.findById(req.params.id, (err, student) =>{
    res.render('detail', { student })
  })
})

router.post('/:id', (req, res, next) => {
  Students.update({_id:req.params.id}, { $set: req.body }, err =>{
    if(err){
      res.send(err)
    }
    else{
      res.redirect('/')
    }
  })
})

router.get('/student/new', (req, res, next) => {
  res.render('new');
})

router.post('/student/new', (req, res, next) => {
  const student = new Students(req.body)
  student.save((err, doc)=>{
    if (err){
      res.send(err)
    }
    else{
      res.redirect('/')
    }
  })
})

router.post('/student/delete', (req, res, next) => {
  Students.remove({_id:req.body.studentId}, err => {
    if (err){
      res.send(err)
    }
    else{
      res.json({ result: 'success' })
    }
  })
})

module.exports = router; 
