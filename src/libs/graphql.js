const { buildSchema } = require('graphql')
const Users = require('../services/users')
const userServices= new Users()
const Products = require('../services/products')
const products = require('../routes/products')
const productServ = new Products()



const root ={
    hello:()=>{
        return "hola mundo"
    },
    //me:async()=>{
        //return await userServices.getUser()
    //}
    all:async()=>{
        return await userServices.getUsers()
    },
    products:async()=>{
        return await productServ.getProducts()
    },
    getProductsByName:async (args)=>{
        return await productServ.getByParams(args)
    }

}

let schemas = buildSchema(`
    type Query{
        hello: String
        me: User
        all:[User]
        products: [Product]
        getProductsByName(name:String):[Product]
    }

    type User{
        name: String,
        password: String,
        email: String
    }
    type Product{
        name: String,
        price: Float,
        description: String,
        categories: [String],
        stock: Int
    }
`)

module.exports = {root,schemas}