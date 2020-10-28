const routes = require('express').Router()
const { User } = require('./app/models/user') 

User.create({name:'teste', email: 'teste@teste.com', passwrod_hash: "1213124" })

module.exports = routes