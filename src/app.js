require('dotenv').config({
    path: process.env.NODE_ENV == 'teste' ? '.env.test' : '.env'
})
const express = require('express')


class AppController {
    constructor(){
        this.express = espress()

        this.midlewares()
        this.routes()
    }

    midlewares(){
        this.express.use(express.json())

    }

    routes() {
        this.express.use(require('./routes'))

    }
}

module.exports = new AppController().express