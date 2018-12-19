const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var ItemImportedModel = new Schema({


    supplier: { type: String, uppercase: true, required: true },
    priceImport: { type: Number, required: true },
    priceExport: { type: Number, required: true },
    amountImport: { type: Number, required: true ,min:1 },
    nameBook: { type: String, required: true, unique: true },
    nameAuthor: { type: String, required: true },
    weight: { type: Number, required: true },
    typeOfBook: { type: String, required: true },
    pageOfBook: { type: Number, required: true },
    publisher: { type: String, required: true }

}, { timestamps: true })
module.exports = mongoose.model("ItemImported", ItemImportedModel)