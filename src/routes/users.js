const { Router } = require('express')

function users(app){
    const router = Router()
    app.use('/api/users',router)

    router.get('/',(req,res)=>{
        return res.send("get users")
    })

    router.get('/:id',(req,res)=>{
        return res.send("get user")
    })
}
module.exports = users