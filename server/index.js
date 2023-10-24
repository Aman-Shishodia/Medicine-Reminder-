require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')

const app=express()

const routes = require("./routes/reminderrouter")

app.use(cors())
app.use(express.json())
app.use(routes)
// app.u\

// main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/reminderapp').then(()=>console.log("DB Connect")).catch(err => console.log(err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(6002,()=>{
    console.log("Server is running")
})