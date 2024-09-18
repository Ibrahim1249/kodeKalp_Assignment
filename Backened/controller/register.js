const { v4: uuidv4 } = require('uuid');


function handleUserRegistration(req,res){
    const uuid = uuidv4();
    const {username , email , password} = req.body;

}

module.exports = handleUserRegistration