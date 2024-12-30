const User = require("../model/userSchema")
        
const otpController = async (req,res)=>{
    const {email, otp} = req.body
    const data = await User.find({email})
    const requireOtp = data[0].otp
    if(requireOtp === otp) {
        if(data[0].emailVerify){
            return res.send("You already verify your email.")
        }
        await User.findOneAndUpdate({email}, {opt: "", emailVerify:true})
    } else{
       return res.send("The otp you have entered is not valid.")
    }  
    res.send(data)  
} 
   
module.exports = otpController