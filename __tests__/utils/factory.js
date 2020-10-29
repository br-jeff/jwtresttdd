const faker = require('faker')
const {factory} = require('factory-girl')
const { User } = require('../../src/app/models)

factory.define('user', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password_hash: faker.internet.password()
})


module.exports = factory