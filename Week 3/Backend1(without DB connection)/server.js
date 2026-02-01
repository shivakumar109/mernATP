//create HTTP server
//import express module
import exp from 'express'

import { userApp } from "./API's/userapi.js"
import { productApp } from "./API's/productapi.js"

//Create Server
const app=exp()
//Assign port number
app.listen(3000,()=>console.log("HTTP server listing on port 3000"))

//body paring middleware
app.use(exp.json()) //checks body

app.use('/user-api',userApp)
app.use('/product-api',productApp)

