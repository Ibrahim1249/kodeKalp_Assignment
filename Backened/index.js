const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./router/v1/userRouter");


dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(cors({options : "*"}));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.use("/api/v1",userRouter)