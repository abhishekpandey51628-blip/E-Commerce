const express = require("express");
const  mongoose = require("mongoose");
const routerAuth = require("./routes/authRoute")
const session = require("express-session")  
const ProduceRoute = require("./routes/CommerceRoute/CommerceRoute.js")


const app = express();
const cors = require("cors");
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(session({
    secret:"ngbsrboubsb",
    saveUninitialized:false,
    resave:false,
}))
app.use("/",routerAuth);
app.use("/",ProduceRoute);
function init(){
    mongoose.connect("mongodb+srv://aniket1:aniket1@myserver.7vzoi9g.mongodb.net/")
        .then(() => {
            console.log('MongoDB connected successfully!');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
          
        });

        app.listen(5000,()=>{console.log("server started")});
}

init();