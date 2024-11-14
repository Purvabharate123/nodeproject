const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const router = require('./route')
app.use("/user", router)
const env = require("dotenv")
env.config()
//const PostRoute = require('./post')
//app.use("/authrisedUser", PostRoute)

mongoose.connect(process.env.DB_connection)
  .then(()=>{
    console.log("connectin created");
  })
  .catch((err)=>{
    console.error(err);
    return res.redirect('index.html');
  })
app.listen(5000);















//
//app.get('/about', (req, res)=>{
  ///  res.send("hello worls...")
//}).listen(1004)




//app.post('/', (req, res)=>{
  //  res.send("hello worls...")
//}).listen(5000)


