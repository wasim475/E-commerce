const express = require("express")
const _ = express.Router()
const registrationController = require("../../controller/registrationController")
const optController = require("../../controller/otpController.js")
const loginController = require('../../controller/loginController.js')


_.get("/registration", (req, res)=>{
    res.send("registration")
})
_.post("/registration", registrationController)
_.post("/otpverify", optController)
_.post("/login", loginController)
  
module.exports = _;