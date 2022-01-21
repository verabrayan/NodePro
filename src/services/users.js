const UserModel = require('../models/users')

class Users{
    async getUser(email){
        const user = await UserModel.findOne({email}).exec()
        return user
    }

    async getUsers(){
        const users = await UserModel.find()
        return users
    }

    async createUser(data){
        const user = await UserModel.create(data)
        return {user,success:true}
    }
}
module.exports = Users