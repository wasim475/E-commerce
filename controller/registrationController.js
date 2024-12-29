const {emailValidation, passwordValidation} = require("../helper/validation")
const user = require("../model/userSchema")

const registrationController = async (req,res)=>{
    const {name, email, password}= req.body
    const existUser = await user.find({email:email})
    if(existUser.length>0){
        res.send("Email already")
        return;
    }
    if(!name){
        res.send("name is required")
    } else if(!email){
        res.send("Email is required..")
    }else if(!password){
        res.send("Password is required")
    }else{
        if(email){
           if(!emailValidation(email)){
            res.send("Enter a valid Email.")
            return;
           }
        }
        if(password){
            if(!passwordValidation(password)){
                res.send("Invalid password")
            }
        }
        const User = new user({
            name, email, password
        })

        User.save()
        res.send(User)
    }
}

module.exports = registrationController;