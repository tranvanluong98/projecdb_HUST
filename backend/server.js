const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors");
const session = require("express-session")
const server = express();
const port = 6969 || process.env.PORT;
const apiRouter = require('./routers/apiRouter')
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())
server.use(session({
    secret: 'db HUST',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 24 * 7 * 1000 }
}))

// Phần này dùng để có thể từ client gọi đến backend trên browser để sau deploy được lên herokuapp
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});
// Cho phép gọi đến server ở port localhost 6969 'https://localhost:6969' ,
server.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

server.get('/', (req, res) => {
    res.send("WELCOME TO MY WORLD")
})

// connect to localhost 
mongoose.connect("mongodb://localhost:27017/manager_bookshop", { useNewUrlParser: true }, (err) => {
    if (err) console.error(err)
    else console.log("Connect db successfully!")
})
// mongoose.connect("mongodb://managerbook:managerbook@ds159273.mlab.com:59273/manager_bookshop", { useNewUrlParser: true },(err)=>{
//     if(err)console.error(err)
//     else console.log("Connect db successfully!")
// })

// use API Router ( REST API )  
server.use('/api', apiRouter)

server.listen(port, (err) => {
    if (err) console.log(err)
    else console.log("Server is running!!")
})