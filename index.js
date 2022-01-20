const express = require('express')


const graphql = require('./src/routes/graphql')
const users = require('./src/routes/users')

const app = express()

//settings
app.set("port",4000);

//routes
graphql(app)
users(app)


//middleware


app.get('/',(req,res)=>{
    return res.send("hola pollo")
})

const server = app.listen(app.get("port"), () => {
    console.log("server on port", app.get("port"));
  });