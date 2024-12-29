const express = require("express")
const _ = express.Router()
const api = process.env.BASE_URL
const apiRoutes = require("../routes/api")

_.use(api,apiRoutes)
module.exports = _