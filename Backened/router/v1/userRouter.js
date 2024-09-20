
const express = require("express");
const handleUserRegistration = require("../../controller/register");
const handleUserLogin = require("../../controller/login");
const handleUserLogout = require("../../controller/logout");
const checkValidEmail = require("../../middleware/verifyMail");

const userRouter = express.Router();


userRouter.post("/register"  , handleUserRegistration);
userRouter.post("/login" , handleUserLogin);
userRouter.post("/logout" , handleUserLogout)

module.exports = userRouter