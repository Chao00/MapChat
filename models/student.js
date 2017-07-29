var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var studentSchema = new Schema ( {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    school: String,
    enrolled: Boolean,
    age: Number
} )

studentSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Students', studentSchema, 'students');