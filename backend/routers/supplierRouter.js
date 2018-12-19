const express = require('express');
const supplierRouter = express.Router();
const SupplierModel = require('../models/SupplierModel')

// get all supplier
supplierRouter.get('/all-suppliers', (req, res) => {
    try {
        SupplierModel.find({}).then(docs => {
            res.json({
                count: docs.length, docs
            })
        })
    } catch{
        console.log('dsdfsdfsd')
    }
    })


        // get supllier by ID 
        supplierRouter.get('/:IDSupplier', (req, res) => {
            try {
                let IdSupplier = req.params.IDSupplier;
                SupplierModel.findById(IdSupplier, (err, FoundSupplier) => {
                    if (err) res.status(404).send({ success: 0, err })
                    else res.status(201).send({ success: 1, FoundSupplier })
                })
            } catch (error) {
                console.log(error, "%s")
            }
        })

        //Post new Supplier

        supplierRouter.post("/create-supplier", (req, res) => {
            try {
                var { nameSupplier, addressSupplier, numberPhone, email } = req.body;
                SupplierModel.create({ nameSupplier, addressSupplier, numberPhone, email }, (err, newSupplier) => {
                    if (err) res.status(500).send({ success: 0, err })
                    else res.status(201).send({ success: 1, newSupplier })
                })
                //.save({ nameSupplier, addressSupplier, numberPhone })
            } catch (error) {
                console.log(error)
            }
        })

        //Update Supplier by ID
        supplierRouter.put("/update-supplier/:idSupplier", async (req, res) => {
            const { nameSupplier, addressSupplier, numberPhone, email } = req.body;
            // what do u wanna update?
            const updateInfoSupplier = { nameSupplier, addressSupplier, numberPhone, email };
            const idSupplier = req.params.idSupplier
            try {
                let SupplierFound = await SupplierModel.findById(idSupplier)
                if (!SupplierFound) res.status(404).send({ success: 0, mess: "not found Supplier" })
                for (let key in updateInfoSupplier) {
                    if (updateInfoSupplier) {
                        SupplierFound[key] = updateInfoSupplier[key]
                    }
                }
                const supplierUpdated = await SupplierFound.save();
                res.status(201).send({ success: 1, supplierUpdated })
                console.log('updated susscessfully')
            } catch (error) {
                console.log(error)
            }
        })
        // delete supplier 
        supplierRouter.delete("/delete-supplier/:IdSupplier", (req, res) => {
            let IdSupplier = req.params.IdSupplier;
            SupplierModel.findByIdAndRemove(IdSupplier, (err) => {
                if (err) res.status(500).send({ succes: 0, err })
                else res.status(201).send({ succes: 1, mess: `delete supplier ${IdSupplier} successfully` })
            })
        })
    
        module.exports = supplierRouter;