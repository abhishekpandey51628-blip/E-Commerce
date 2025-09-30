const express = require("express");
const  mongoose = require("mongoose");



//
const app = express();





function init(){
    mongoose.connect("mongodb://localhost:27017")
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