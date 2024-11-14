const express = require('express').Router()
const route = require('express').Router()

const { request } = require('express')
const userModule = require('./module')
const { registerValidation, loginValidate } = require('./validation')
const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')

//registerdata
route.post('/register', async (req, res) => {

  const { error } = registerValidation(req.body)
  if (error) return res.status(404).send(error.details[0].message)

  const emailExist = await userModule.findOne({ email: req.body.email })
  if (emailExist) return res.status(404).send("email aldery exist")

  //const salt = await bcrypt.genSalt(10);
  //const hashpassword = await bcrypt.hash(req.body.password, salt)


  const newUser = new userModule({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  })
  try {
    const SaveDate = await newUser.save()
    res.send(SaveDate)
  } catch (error) {

    console.log(error);
  }
})

//showdata
//route.get("/showData", async (req, res) => {
  //try {
    //const showData = await userModule.find()
    //res.send(showData)
  //} catch (error) {
    //console.log(error);
  //}
//})
// login
route.post("/login", async (req, res) => {
  const { error } = loginValidate(req.body)
  if (error) return res.status(404).send(error.details[0].message)

    

  //email
  const userExist = await userModule.findOne({ email: req.body.email })
  if (!userExist) return res.status(400).send("invalid email")
       
  const ispass = await bcrypt.compare(req.body.password, userExist.password)
  if (!userExist) return res.status(400).send("invalid password")


   // const token = jwt.sign({_id : userExist._id}, process.env.Token_secret)
    //res.header('auth-token', token).send(token)


    res.send("login succesful")
})








//showone
//route.get("/showOne", async (req, res) => {
  //const id = req.query.id
  //try {
    //const showone = await userModule.findById(id)
    //res.send(showone)
  //} catch (error) {
    //console.log(error);
  //}
//})

//delete
//route.delete("/delete", async (req, res) => {
  //let id = req.query.id
  //try {
    //const deleteData = await userModule.findByIdAndDelete(id);
    //res.send('delete data succefully');
  //} catch (error) {
    //console.log(error);
  //}
//})

//update
//route.post("/update", async (req, res) => {
  //let _id = req.body._id
  //try {
    //const updateData = await userModule.findByIdAndUpdate(_id, req.body)
    //res.send("data updated")
  //} catch (error) {
    //console.log(error);
  //}
//})
module.exports = route;
