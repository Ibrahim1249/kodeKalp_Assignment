
const bcrypt = require('bcrypt');
const userRegisterModel = require("../model/userRegister.js");
const { generateToken } = require('../middleware/jwt.js');

async function handleUserLogin(req,res){

    try{
        const {email , password} = req.body;
         const  userData = await userRegisterModel.findOne({email}).select("-__v -_id") 
         if(!userData){
             return res.status(404).json({message : "Invalid Credentials"})
         }
 
         const matchUserFromDB = await bcrypt.compare(password , userData.password);

         if(matchUserFromDB){
              // create payload 
              const payload = {
                  userId : matchUserFromDB._id,
                  email : matchUserFromDB.email
              }
              const token = generateToken(payload)
            //   console.log(token)
              res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict', 
                maxAge: 3600000 // Cookie expiry in (1 hour)
              });
             return res.json({ message: "User login successful", userData });
         }else{
             return res.status(401).json({ message: "Incorrect Password" });
         }
     }catch(error){
         console.log("error from register controller" , error.message);
         res.status(500).json({error : error.message})
     }
}

module.exports = handleUserLogin