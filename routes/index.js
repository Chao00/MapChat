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

router.get('/new', (req, res, next) => {
  res.render('new');
})

router.post('/new', (req, res, next) => {
  const student = new Students(req.body)
  student.save((err, doc)=>{
    if (err){
      res.send(err)
    }
    else{
      res.redirect('ok')
    }
  })
})

module.exports = router; 
