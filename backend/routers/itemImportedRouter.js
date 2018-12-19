const express = require('express')
const itemImportedRouter = express.Router();
const itemImportedModel = require('../models/ItemImportedModel')

// get all Book Imported 
itemImportedRouter.get('/all-book-imported', async (req, res) => {
    try {
        //count Book 

        itemImportedModel.find({}).then(docs => {
            res.json({
                count: docs.length,
                docs
            })
        })
    }
    catch (error) {
        console.log(error)
    }


})


//get by ID

itemImportedRouter.get('/:IdImported', (req, res) => {
    try {
        let IdImported = req.params.IdImported;
        itemImportedModel.findById(IdImported, (err, BookFound) => {
            if (err) res.status(404).send({ success: 0, err })
            else res.status(201).send({ success: 1, BookFound })
        })
    } catch (error) {
        console.log(error, "%s")
    }
})
// get nameBook - Danh sách sản phẩm

itemImportedRouter.get('/list-book', (req, res) => {
    // let numberBook = itemImportedModel.count();
    try {
        itemImportedModel.find({}, (err, FoundBillImported) => {
            if (err) res.status(404).send({ success: 0, mess: "Not Found Bill" })
            else res.status(201).send(FoundBillImported)
        })
            .select("nameBook amountImport")

    }
    catch (error) {
        console.log(error)
    }


})


// create new bill book imported

itemImportedRouter.post("/create-bill-imported", (req, res) => {
    var { supplier, priceImport, priceExport, amountImport, nameBook, nameAuthor,
        weight, typeOfBook, pageOfBook, publisher } = req.body;
    let checkID = nameBook
    try {
        // check book exist ??
        itemImportedModel.findOne({ checkID })
            .exec((err, existBook) => {
                // if (err) res.send({ success, err })
                if (existBook) {
                    res.send({ mess: `Exist book  name book is ${nameBook}.We would only update amount of this book into warehouse` })

                }
                else {
                    itemImportedModel.create({
                        supplier, priceImport, priceExport, amountImport, nameBook, nameAuthor,
                        weight, typeOfBook, pageOfBook, publisher
                    }, (err, newBookImported) => {
                        if (err) res.send({ success: 0, err })
                        else {
                            res.send({ success: 1, newBookImported })

                        }
                    })
                }
            })

    } catch (error) {
        console.log(error)
    }
})
// update bill import by ID
itemImportedRouter.put('/update-bill-import/:idBillImport', async (req, res) => {
    const { supplier, priceImport, priceExport, amountImport, nameBook, nameAuthor, weight, typeOfBook, pageOfBook, publisher } = req.body;
    let IDBook = req.params.idBillImport;
    // var data = amountImport
    var data = await itemImportedModel.findByIdAndUpdate(IDBook, { $inc: { amountImport: amountImport } })
    //not update amountImport
    console.log("Gia tri cua data", data)
    let updatedNumberBook = { supplier, priceImport, priceExport, nameBook, nameAuthor, weight, typeOfBook, pageOfBook, publisher }

    try {
        let FoundBillImport = await itemImportedModel.findById(IDBook)

        if (!FoundBillImport) res.send({ success: 0, mess: `Can't find this id bill ${IDBook}` })
        else {

            for (let key in updatedNumberBook) {
                if (!updatedNumberBook) res.send({ mess: " You haven't updated anything" })
                else {
                    FoundBillImport[key] = updatedNumberBook[key]
                    console.log('updated info', key)
                    console.log(FoundBillImport[key])
                }
            }
            const updatedBill = await FoundBillImport.save();
            res.status(201).send({ success: 1, updatedBill, mess: `Updated successfully bill having id ${IDBook}` })
        }
    } catch (error) {
        console.log(error)
    }
})


// delete bill import


itemImportedRouter.delete("/delete-bill-imported/:idBill", (req, res) => {
    let idBill = req.params.idBill;

    itemImportedModel.findByIdAndRemove(idBill, (err) => {
        if (err) res.status.send({ success: 0, err, mess: "can't not delete this bill" })
        else
            res.status(201).send({ success: 1, mess: `Deleted bill having id ${idBill}` })
    })
})

module.exports = itemImportedRouter;