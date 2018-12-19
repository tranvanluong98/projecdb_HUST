const express = require('express');
const authAdmin = express.Router();
const AuthAdminModel = require('../models/AdminModel');


//get all admin
authAdmin.get('/all-admin', (req, res) => {
    try {
        AuthAdminModel.find({}, (err, FoundAdmin) => {
            if (err) res.send({ err })
            else res.send({ FoundAdmin })
        })
    } catch (error) {
        console.log(error)
    }
})
//create admin 
authAdmin.post('/create-admin', (req, res) => {
    try {
        const data = req.body;
        AuthAdminModel.create(data)
        res.send({ success: 1, data })
    } catch (error) {
        console.log('Loi roi.')
    }

})

authAdmin.post('/login', (req, res) => {
    console.log("da log in")
    const user = {
        username,
        password
    } = req.body;
    console.log(user)
    if (!username || !password) { res.status(400).send({ success: 0, message: 'Missing username or password!' }); }
    else {
        AuthAdminModel.findOne({ username }, (err, userFound) => {
            if (err) {
                res.status(500).send({ success: 0, message: "sai o day" });
            }
            else {
                if (!userFound) {
                    console.log("không đúng username");
                    res.status(404).send({ success: 0, message: "ten dang nhap ko ton tai" });
                    // alert("Không tồn tại username "+this.state.username)
                }
                else {
                    console.log("so sanh")
                    //  let cmp = bcrypt.compareSync(password, userFound.hashPassword);
                    // let cmp = 1;

                    if (password === userFound.password) {
                        req.session.user = userFound
                        console.log("Thành Công");
                        // alert("Đăng Nhập Thành Công")
                        res.status(201).send({ success: 1, userFound });
                    }
                    else {
                        console.log("deo dc");

                        res.status(401).send({ success: 0, message: "Sai Mat Khau" });
                    }
                }
            }
        })

    }
});

// logout -------------- 
authAdmin.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) res.status(500).send({
            success: 0,
            err
        })
        else res.send({
            success: 1,
            message: "Success!"
        });
    });
    const user = {
        username,
        password
    } = req.body;
    console.log(user)
});

authAdmin.get('/login/check', (req, res) => {
    if (req.session.user) {
        res.send({ success: 1, user: req.session.user });
        console.log(req.session.user)
    }
    else res.status(401).send({ success: 0, message: "failed" })
})

module.exports = authAdmin;