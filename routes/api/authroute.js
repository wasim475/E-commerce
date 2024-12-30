const express = require("express")
const _ = express.Router()
const registrationController = require("../../controller/registrationController")
const optController = require("../../controller/otpController.js")


_.get("/registration", (req, res)=>{
    res.send("registration")
})
_.post("/registration", registrationController)
_.post("/otpverify", optController)
  
module.exports = _;