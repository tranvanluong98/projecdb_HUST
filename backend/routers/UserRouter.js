const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/UserModel')
// Get info all User
userRouter.get('/all-user', (req, res) => {
    try {
        UserModel.find({}, (err, UserFound) => {
            if (UserFound) res.json({ success: 1, UserFound })
            else res.json({ success: 0, err })
        })
    } catch (error) {
        console.log(error)
    }
})
/// Get info user by ID 

userRouter.get(`/:idUser`, (req, res) => {
    try {
        let IdUser = req.params.idUser;
        if (IdUser) {
            UserModel.findById(IdUser, (err, UserFound) => {
                if (err) res.status(404).send({ success: 0, err: `Not exist this ${IdUser}` })
                else
                    res.json({ success: 1, UserFound })
            })
        }
    } catch (error) {
        console.log(err)
    }

})
//update by ID
userRouter.put('/update/:idUser', async (req, res) => {
    let IDUser = req.params.idUser;
    var { name, password, dateOfBirth, email, numberPhone, addressCustomer, sex } = req.body;
    var updateInfoUser = { name, password, dateOfBirth, email, numberPhone, addressCustomer, sex }
    try {
        let UserFound = await UserModel.findById(IDUser)
        if (!UserModel) res.status(404).send({ success: 0, mess: "not found Supplier" })
        for (let key in updateInfoUser) {
            if (updateInfoUser) {
                UserFound[key] = updateInfoUser[key]
            }
        }
        const userUpdated = await UserFound.save();
        res.status(201).send({ success: 1, userUpdated })
        console.log('updated susscessfully')
    } catch (error) {
        console.log(error)
    }
})

// post new user 
userRouter.post('/create-user', (req, res) => {
    const { username, name, password, dateOfBirth, email, numberPhone, addressCustomer, sex } = req.body;
    UserModel.create({ username, name, password, dateOfBirth, email, numberPhone, addressCustomer, sex }, (err, createdNewuser) => {
        if (err) res.json({ succes: 0, err })
        else {
            res.status(201).send({ succes: 1, createdNewuser })
        }
    })
})


// delete user by id
// userRouter.delete('/delete-user/:IDuser', (req, res) => {
//     let idUser = req.params.IDuser;
//     UserModel.findOneAndRemove(idUser, (err) => {
//         if (err) res.json({ success: 0, message: "Can't delete user" });
//         else res.json({ success: 1, message: "Deleted user" })
//         if (!idUser) res.status(404).send({ succes: 0, mess: "user deleted" })
//     })
// })

userRouter.delete("/delete-user/:Id_user", (req, res) => {
    UserModel.findByIdAndRemove({ _id: req.params.Id_user }, function (err, userDelete) {
        if (err) res.status(500).send({ success: 0, err })
        else res.send({ success: 1, message: "Deleted user" });
    });
});
module.exports = userRouter;