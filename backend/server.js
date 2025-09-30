const express = require("express");
const  mongoose = require("mongoose");
const routerAuth = require("./routes/authRoute")
const session = require("express-session")

//
const app = express();

app.use(express.json())
app.use(session({
    secret:"ngbsrboubsb",
    saveUninitialized:false,
    resave:false,
}))
app.use("/",routerAuth);

function init(){
    mongoose.connect("mongodb://localhost:27017/Ecommerce")
        .then(() => {
            console.log('MongoDB connected successfully!');
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit application on connection failure
        });

        app.listen(5000,()=>{console.log("server started")});
}

init()