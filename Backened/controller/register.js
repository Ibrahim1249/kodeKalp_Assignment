const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const userRegisterModel = require("../model/userRegister.js");
const { sendMailer } = require('../services/mail.js');
const saltRounds = 10;

async function handleUserRegistration(req,res){
    try{
        const {username , email , password} = req.body;
         const userId = uuidv4()
         const hashPassword = await bcrypt.hash(password , saltRounds);
         const userToSave = new userRegisterModel({ uuid : userId , username , email , password : hashPassword}) 
          await userToSave.save();
         const result = await sendMailer(email , "http://localhost:5173/login")
         if(result){
            res.status(201).send({message : "user register successfully"})
         }
     }catch(error){
         console.log("error from register controller" , error.message);
         res.status(500).send({error : error.message})
     }
}

module.exports = handleUserRegistration