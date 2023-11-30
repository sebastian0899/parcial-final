const express = require('express')
const gorrasRouter = require('./gorras.router')

function routerApi(app){
    const router = express.Router()

    app.use('/api/v1', router)

    router.use('/gorras', gorrasRouter)
}

module.exports = routerApi