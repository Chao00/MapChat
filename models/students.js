const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const StudentsSchema = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    age: Number,
  // createdAt: { type: Date, default: new Date()},
  // studentType: { type: String, enum:['international', 'domestic'] }
})

StudentsSchema.plugin(passportLocalMongoose);

const Students = mongoose.model('students', StudentsSchema);

module.exports = Students;