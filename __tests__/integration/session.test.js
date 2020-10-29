const request = require('supertest')
const {User}  = require('../../src/app/models')

const app = require('../../src/app')
describe('Authentication' , () => {
    it('should recive JWT token when authenticated with valid credentials' , async () => {
        const user = await User.create({
            name: "teste",
            email: "teste@teste.com",
            password_hash: '123'
        })
        console.log(user)

        const response = await request(app)
        .post('/sessions').
        .send({
            email: user_email,
            password: '123'
        })

        expect(response.status).toBe(200)
    })

})


