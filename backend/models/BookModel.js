const mongoose = require('mongoose');
const ItemImported = require('./ItemImportedModel')
const Schema = mongoose.Schema;
const BookModel = new Schema({
    name: {
        type: String, reuired: true
    },
    namebook: { type: String, required: true },
    infobook: { type: Schema.Types.ObjectId, ref: "ItemImported" },
    number: { type: Number, required: true }
}, {
        timestamps: true
    })

module.exports = mongoose.model("Book", BookModel)

