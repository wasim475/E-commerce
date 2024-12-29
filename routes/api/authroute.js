const express = require("express")
const _ = express.Router()
const registrationController = require("../../controller/registrationController")


_.get("/registration", (req, res)=>{
    res.send("registration")
})
_.post("/registration", registrationController)

module.exports = _;