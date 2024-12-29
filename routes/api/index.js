const express = require("express")
const _ = express.Router()
const authroute = require("./authroute")

_.use("/auth",authroute)

module.exports = _;