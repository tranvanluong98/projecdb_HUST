const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var StaffModel = new Schema({
    staff_Name: { type: String, required: true },
    staff_NumberPhone: { type: String, required: true, unique: true },
    staff_Address: { type: String, required: true },
    staff_Position: { type: String, required: true }
}, { timestamp: true })
module.exports = mongoose.model('Staff', StaffModel)