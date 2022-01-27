const express = require('express')

const { connection } = require("./config/db")

const graphql = require('./routes/graphql')
const apollo = require('./routes/apollo')
const products = require('./routes/products')
const users = require('./routes/users')

const app = express()

//settings
app.set("port",4000);

//connection db
connection().catch((err) => console.log(err));

//middleware
app.use(express.json())


//routes
graphql(app)
users(app)
products(app)
apollo(app)





app.get('/',(req,res)=>{
    return res.send("hola pollo")
})

const server = app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
  });