const express = require('express');
const staffRoute = express.Router();
const StaffModel = require('../models/StaffModel')

staffRoute.get('/all-staff', (req, res) => {

    StaffModel.find({}, (err, FoundStaff) => {

        if (err) res.send({ success: 0, err })
        else res.status(201).send({ success: 1, FoundStaff });
    })
})
//Post new Object

staffRoute.post('/new-staff', (req, res) => {

    var { staff_Name, staff_NumberPhone, staff_Address, staff_Position } = req.body;
    StaffModel.create({ staff_Name, staff_NumberPhone, staff_Address, staff_Position }, (err, newStaffCreated) => {
        try {
            if (err) res.send({ err })
            else
                res.json({ newStaffCreated })
        } catch (error) {

        }
    })
})

// delete supplier 
staffRoute.delete("/delete-staff/:idStaff", (req, res) => {
    let idStaff = req.params.idStaff;
    StaffModel.findByIdAndRemove(idStaff, (err) => {
        if (err) res.status(500).send({ succes: 0, err })
        else res.status(201).send({ succes: 1, mess: `delete staff ${idStaff} successfully` })
    })
})
module.exports = staffRoute;