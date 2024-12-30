const { emailValidation, passwordValidation } = require("../helper/validation");
const user = require("../model/userSchema");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')

const registrationController = async (req, res) => {
  const { name, email, password } = req.body;
  const existUser = await user.find({ email: email });
  if (existUser.length > 0) {
    res.send("Email already");
    return;
  }
  if (!name) {
    res.send("name is required");
  } else if (!email) {
    res.send("Email is required..");
  } else if (!password) {
    res.send("Password is required");
  } else {
    if (email) {
      if (!emailValidation(email)) {
        res.send("Enter a valid Email.");
        return;
      }
    }
    if (password) {
      if (!passwordValidation(password)) {
        res.send("Invalid password");
      }
    }

      
    const otp =  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    
  
    bcrypt.hash(password, 10, async function (err, hash) {
      const User = new user({
        name,
        email,
        password: hash,
        otp
      });

      User.save();
      if (User) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "loginassistant005@gmail.com",
            pass: "dobv kprk pvlu hxbq",
          },
        });
 
        const info = await transporter.sendMail({
            from: ' "E-commerce" loginassistant005@gmail.com', // sender address
            to: "wasim.hossain003@gmail.com", // list of receivers
            subject: "Verify Your Email", // Subject line
            // text: "Hello world?", // plain text body 
            html: "<div><h1>Verify Your Email.</h1><a href=https://criccast.netlify.app/ ><button>Verify</button></a></div>", // html body
          }); 


      }
      res.send(User);
    });
  }
};

module.exports = registrationController;
