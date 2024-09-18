
const express = require("express");
const handleUserRegistration = require("../../controller/register");
const handleUserLogin = require("../../controller/login");

const userRouter = express.Router();


userRouter.post("/register" , handleUserRegistration);
userRouter.post("/login" , handleUserLogin);

module.exports = userRouter