const { buildSchema } = require('graphql')



const root ={
    hello:()=>{
        return "hola mundo"
    }
}

let schemas = buildSchema(`
    type Query{
        hello: String
    }
`)

module.exports = {root,schemas}