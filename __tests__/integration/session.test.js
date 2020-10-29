const request = require('supertest')
const factory = require('../utils/factory')

const app = require('../../src/app')
const truncate = require('../utils/truncate')


describe('Authentication' , () => {

    beforeAll( async () => { await truncate })

    it('should recive JWT token when authenticated with valid credentials' , async () => {
        const user = await factory.create("User", {
            password: '123123'
        })
        console.log(user)

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user_email,
            password: '123123'
        })

        expect(response.status).toBe(200)
    })

    it('should not authenticate with invalid credentials', async () => { 
        const user = await factory.create("User", {
            password: '123123'
        })
        console.log(user)

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user_email,
            password: '123123'
        })

        expect(response.status).toBe(401)
    })
    
    it('should return jwt token when authenticated', async ()=> {
        const user = await factory.create("User", {
            password: '123'
        })
       

        const response = await request(app)
        .post('/sessions')
        .send({
            email: user_email,
            password: '123'
        })

        expetec(response.body).toHaveProperty("token")
    })


})


