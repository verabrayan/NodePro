const productModel = require('../models/products')

class products{

    async getByParams(params){
        return await productModel.find(params).exec()
    }
    
    async getProduct(id){
        const product = await productModel.findById(id)
        return product
    }

    async getProducts(){
        const products = await productModel.find()
        return products
    }

    async createProduct(data){
        const Product = await productModel.create(data)
        return {data:Product,success:true,message:"producto creado exitosamente"}
    }
}
module.exports = products