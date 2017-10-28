const express = require('express');
const router = express.Router();

// get request
router.get('/', (req, res, next) => {
  res.render('index', { title: "Students Table", name: "Michael"});
})

module.exports = router; 
