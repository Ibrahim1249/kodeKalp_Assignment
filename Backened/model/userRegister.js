
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    uuid :{
        type : String,
        require : true,
    },
    username : {
        type : String,
        require : true,
        unique : true,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password :{
        type : String,
        require : true,
    }
},{timestamps : true})

const userRegisterModel = mongoose.model("userRegister",userSchema);

module.exports = userRegisterModel