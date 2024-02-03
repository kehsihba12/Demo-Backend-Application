require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("Hi every one my name is abhishek i can able to learn anything")
})

app.get('/abhi',(req,res) => {
    res.send("inside the Abhi file")
})

app.get('/abhishek/kannor',(req,res) => {
    res.send(" <h1>Hi every one auf weidersehen..! my first backend code </h1>")
})

app.listen(process.env.PORT),() => {
    console.log(`example app listening on port ${port}`)
}