const { Router } = require('express')
const Users = require('../services/users')
function users(app){
    const router = Router()
    const userService = new Users()
    app.use('/api/users',router)

    router.get('/',async(req,res)=>{
        const users = await userService.getUsers()
        return res.json(users)
    })

    router.get('/:email',async(req,res)=>{
        const {email}= req.params
        const user = await userService.getUser(email)
        return res.json(user)
    })
}
module.exports = users