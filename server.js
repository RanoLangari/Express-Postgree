import express from "express"

const Port = 5000;
const App = express()
App.use(express.urlencoded({extended: true}))
App.use(express.json())


App.get('/',(_,res)=> {
    res.send("Server up And Running")
})

App.listen(Port, ()=> {
    console.log(`Application Up and Running on Port ${Port}`)
})