const { graphqlHTTP }= require('express-graphql')
const {root,schemas} = require('../libs/graphql')

function graphql(app){

    app.use('/graphql',graphqlHTTP({
        graphiql:true,//habilita el sandbox
        rootValue:root,//lista los schemas para consultas
        schema:schemas//instancia de la estructura de la info
    }))
}

module.exports = graphql