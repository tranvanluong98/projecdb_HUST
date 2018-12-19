const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var SupllierModel = new Schema({
    nameSupplier: { type: String, required: true, uppercase: true, unique: true },
    addressSupplier: { type: String, required: true, unique: true },
    numberPhone: { type: String, required: true, maxlength: 11, minlength: 10, unique: true },
    email: { type: String, required: true, unique: true }
}, {
        timestamps: true
    })

module.exports = mongoose.model("Supplier", SupllierModel)