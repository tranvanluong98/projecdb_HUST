const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AdminModel = new Schema({
    username: { type: String, required: true, unique: true, maxlength: 40, minlength: 5 },
    password: { type: String, required: true, maxlength: 40, minlength: 5 }
}, { timestamps: true })
module.exports = mongoose.model("Admin", AdminModel)
