const mongoose = require("mongoose")
const {Schema} = mongoose;
const usersSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    otp: {
        type: String,
    }, 
    emailVerify: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["admin", "marchant", "user"]
        default: "user"
    }
})

module.exports = mongoose.model("user",usersSchema)