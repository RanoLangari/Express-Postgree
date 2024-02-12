import express from "express"
import client from "./Database.js";

const Port = 5000;
const App = express()
App.use(express.urlencoded({extended: true}))
App.use(express.json())
App.get('/',(_,res)=> {
    res.send("Server up And Running")
})

// App.get('/getBarang', (_,res) => {
//     const SQL = 
// })

App.listen(Port, ()=> {
    console.log(`Application Up and Running on Port ${Port}`)
})