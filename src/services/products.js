const productModel = require('../models/products')

class products{

    // async getByParams(params){
    //     return await productModel.find(params).exec()
    // }
    
    async getProduct(query){
        if(query.categories){
            query.categories = {
                $all:query.categories
            }
        }
        return await productModel.findOne(query).exec()
    }

    async getProducts(query){
        if(query.categories){
            query.categories = {
                $all:query.categories
            }
        }
        return await productModel.find(query)
    }

    async createProduct(data){
        //const Product = await productModel.create(data)
        //return {data:Product,success:true,message:"producto creado exitosamente"}
        return await productModel.create(query.product)
    }

    async update(query){
        // Reto corregir
        return await productModel.findOneAndUpdate({id:query.id},query.product)
        //return await ProductModel.findByIdAndUpdate(query.id,data.product)
    }
}
module.exports = products