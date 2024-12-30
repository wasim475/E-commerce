const user = require('../model/userSchema')
const bcrypt = require('bcrypt');

const loginController = async (req, res)=>{
    const {email,password}= req.body
    const existUser = await user.find({email})
    if(existUser.length<1){
        res.send({error: "Invalid Credential."})   
    } else if(existUser[0].email=== email){
        bcrypt.compare(password , existUser[0]?.password, function(err, result) {
            if(result){
                res.send({sucess: "Login Successfull."})
            }else{
                res.send({error: "Invalid creadential."})
            }

        });
    }
    
}
 
module.exports = loginController;