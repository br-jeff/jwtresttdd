const routes = require('express').Router()
const { User } = require('./app/models/user') 
const SessionController = require('./controllers/SessionController')

routes.post("/sessions", (req,res) => { 

})

module.exports = routes