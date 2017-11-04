var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');

var Student  = new Schema ({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    school: String,
    enrolled: Boolean,
    age: Number
})

// Student.plugin(passportLocalMongoose);

module.exports = mongoose.model('Students', Student, 'students');