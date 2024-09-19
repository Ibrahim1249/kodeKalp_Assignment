
const bcrypt = require('bcrypt');
const userRegisterModel = require("../model/userRegister.js")

async function handleUserLogin(req,res){
    try{
        const {email , password} = req.body;
         const  userData = await userRegisterModel.findOne({email}).select("-__v -_id") 
         if(!userData){
             return res.status(404).json({message : "Invalid Credentials"})
         }
 
         const matchUserFromDB = await bcrypt.compare(password , userData.password);
         if(matchUserFromDB){
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