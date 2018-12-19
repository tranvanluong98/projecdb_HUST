const express = require('express')
const apiRouter = express.Router();
const authAdmin = require('./authAdminRouter')
const userRouter = require('./UserRouter')
const bookRouter = require('./BookRouter')
// const billRouter = require('./BillRouter')
const itemImport = require('./itemImportedRouter')
const supplierRouter = require('./supplierRouter')
const staffRouter = require('./staffRouter')
// const FormSellBook = require('./FormSellBook')

apiRouter.use("/", (req, res, next) => {
    // res.send('Nothing in here!!')
    next();
});

apiRouter.get('/example', (req, res) => {
    res.send("You go into our API")
})


apiRouter.use('/import-item', itemImport)
// apiRouter.use('/bill', billRouter)
apiRouter.use('/book', bookRouter)
apiRouter.use('/user', userRouter)
apiRouter.use('/auth', authAdmin)
apiRouter.use('/supplier', supplierRouter)
apiRouter.use('/staff', staffRouter)
// apiRouter.use('/form', FormSellBook)


module.exports = apiRouter;