const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./router/v1/userRouter");
const {mongoose } = require("mongoose");
const cookieParser = require('cookie-parser')
dotenv.config();

const app = express()
const port = process.env.PORT || 3000
const corsOptions = {
    origin: 'https://kodekalp-assignment-front.onrender.com', // Your frontend URL
    credentials: true, 
    allowedHeaders : ['Content-Type' , 'Authorization']
}

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended : false}));

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(port,()=>{
        console.log("server running on port" , port)
    })
}).catch((error)=>{
    console.log(error.message)
})



app.use("/api/v1",userRouter)