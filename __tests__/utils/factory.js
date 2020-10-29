const {factory} = require('factory-girl')
const { User } = require('../../src/app/models)

factory.define('user', User, {
    name: "teste",
    email: "teste@teste.com",
    password_hash: '123'
})


module.exports = factory