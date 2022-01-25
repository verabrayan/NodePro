const { buildSchema } = require('graphql')
const Users = require('../services/users')
const userServices= new Users()
const Products = require('../services/products')
const productServ = new Products()



const root ={
    hello:()=>{
        return "hola mundo"
    },
    //me:async()=>{
        //return await userServices.getUser()
    //}
    // all:async()=>{
    //     return await userServices.getUsers()
    // },
    // products:async()=>{
    //     return await productServ.getProducts()
    // },
    // getProductsByName:async (args)=>{
    //     return await productServ.getByParams(args)
    // },
    users:userServices.getUsers,
    product:productServ.getProduct,
    products:productServ.getProducts,
    createProduct:productServ.createProduct,
    updateProduct:productServ.update

}

let schemas = buildSchema(`
input ProductInput{
    name: String,
    price: Float,
    description: String,
    categories: [String],
    stock: Int
}
type Query{
    hello: String
    me: User
    users: [User]
    product(id:String,name:String,categories:[String]):Product
    products(name:String,categories:[String]): [Product]
}

    type User{
        id: String,
        name: String,
        password: String,
        email: String
    }
    type Product{
        id: String,
        name: String,
        price: Float,
        description: String,
        categories: [String],
        stock: Int
    }
    type Mutation{
        createProduct(product: ProductInput): Product
        updateProduct(id:String!, product: ProductInput): Product
    }
`)

module.exports = {root,schemas}