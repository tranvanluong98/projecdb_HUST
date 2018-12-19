const express = require('express');
const bookRoute = express.Router();
const ItemImported = require('../models/ItemImportedModel')
const User = require('../models/UserModel')
const BookModel = require('../models/BookModel')


bookRoute.get("/allbillbook", (req, res) => {
    try {
        BookModel.find({}).then(docs => {
            res.json({
                count: docs.length,
                docs

            })

        })
    } catch (error) {

    }
})

bookRoute.get('/:idbook', (req, res) => {
    console.log('trc khi populate')
    let idbook = req.params.idbook;
    ItemImported
        .findById(idbook)
        .select("nameBook")
        .populate('infobook')
        .exec((err, foundBook) => {
            if (err) res.send({ success: 0, err })
            else {

                console.log(`id recieved : ${idbook}`)
                res.send({ success: 1, foundBook})

            }
        })


})

// buy book 
bookRoute.post('/buy-book/', async (req, res) => {

    var { name, namebook, number } = req.body;
    // find book exist
    let nameBook = namebook;
    var totalPrice;

    try {
        // orderbook and check book available
        ItemImported.findOneAndUpdate({ nameBook }, { $inc: { amountImport: -number } })

            .exec((err, exitBook) => {
                if (err) res.send({ err })
                else if (exitBook) {

                    BookModel.create({ name, namebook, number }, (err, newBillBook) => {

                        if (err) res.send({ err })
                        else {
                            res.send({ newBillBook })
                            // console.log('So sach trong kho ', amountImport)
                            console.log('da mua thanh cong', newBillBook)
                            // console.log('Tong gia ', totalPrice)

                        }

                    })

                }

                else res.send({ mess: `khong co sach: ${namebook} trong db` })


            })

    } catch (error) {
        console.log(error)
    }

})
bookRoute.delete('/delete-bill/:idBill', (req, res) => {
    let idBill = req.params.idBill
    BookModel.findByIdAndRemove(idBill, (err, deleted) => {
        res.send({ deleted })
    })
})

module.exports = bookRoute