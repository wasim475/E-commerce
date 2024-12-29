const express = require("express")
const _ = express.Router()
const apiversion = process.env.BASE_URL
const apiRoute = require("./api")

_.use(apiversion,apiRoute)

_.use(apiversion, (req,res)=> res.json("No api found in this route"))

module.exports = _;