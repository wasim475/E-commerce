const express = require("express")
const _ = express.Router()

_.get("/registration", (req, res)=>{
    res.send("Registration")
})

module.exports = _;