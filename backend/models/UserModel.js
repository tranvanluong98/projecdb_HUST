const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema({

    name: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    numberPhone: { type: String, required: true, unique: true },
    addressCustomer: { type: String, required: true },
    sex: { type: String, default: "Chưa xác định" }

}, {
        timestamps: true
    })

module.exports = mongoose.model("User", UserModel)