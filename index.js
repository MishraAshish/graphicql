import express from "express";
import resolvers from "./resolver";
import schema from "./schema";

import {graphqlHTTP} from "express-graphql";

const app = express();

app.get('/', (req, res) => {
    res.send('up and running with graphql crash course')
})

const root = resolvers
//{lco : ()=> console.log("LearnCodeOnline.in Keep Learning!")}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue : root,
    graphiql : true
}))

app.listen(8082,()=>{console.log(`up and running 8082`)})

//three basic things present in graphql
//1. schema
//2. resolver
//3. tiny configuration

//https://www.youtube.com/watch?v=_Zss2Mbz4Bs&t=989s