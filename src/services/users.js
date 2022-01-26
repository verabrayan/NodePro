const UserModel = require('../models/users')

class Users{
    async getUser(email){
        const user = await UserModel.findOne({email}).exec()
        return user
    }

    async getUsers(query){
        const users = await UserModel.find(query)
        return users
    }

    async createUser(data){
        const user = await UserModel.create(data)
        return {data:user,success:true,message:"Usuario creado exitosamente"}
    }
    async update(query){
        // const user = UserModel(data)
        // await user.save()
        return await UserModel.findOneAndUpdate({_id:query.id},query.user,{new:true})
    }
}
module.exports = Users