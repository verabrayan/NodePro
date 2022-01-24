const { Router } = require('express')
const UserModel = require('../models/products')
const product = require('../services/products')
function products(app){
    const router = Router()
    const productServ = new product()
    app.use('/api/productos',router)

    router.get('/',async(req,res)=>{
        const products = await productServ.getProducts()
        return res.json(products)
    })

    router.get('/:id',async(req,res)=>{
        const {id}= req.params
        const product = await productServ.getProducts(email)
        return res.json(product)
    })

    router.post("/", async (req, res) => {
        console.log(req.body)
        const newProduct = await productServ.createProduct(req.body);
        return res.json(newProduct);
      });
}
module.exports = products