const routes = require('express').Router()
const { User } = require('./app/models/user') 
const SessionController = require('./app/controllers/SessionController')

routes.post("/sessions", (req,res) => {SessionController.store })


routes.get("/dashboard",(req,res)=> {
    return res.status(200).send()
})
module.exports = routes