const express = require("express")
const UserModel = require("../Model/user.js")
const router = express.Router();


router.post("/signup", async(req,res)=>{
    try{ 
      const {name,email, password} = req.body;
     const existingUser= await UserModel.findOne({email});
    if(existingUser) {
      console.log("111")
       return res.status(401).json({msg:"user email already exist"});
    }
    
     const userdata = new UserModel({name,email, password});
     await userdata.save();
     res.render("login");
    }
     catch(err){
      console.error(err);
      res.status(500).json({message:"Error signing up"});
     }
});


router.post("/login", async(req,res)=>{
         const {email, password} = req.body;
         const userdata = await UserModel.find({email});
         if(userdata.length==0){ 
            return res.status(401).json({msg:"User email not found"})
              }
         if(userdata[0].password===password){
            req.session.valid=true;
           return  res.status(200).json({msg:"logined"});
         }
        return  res.status(401).json({msg:"User password not correct"});
        
         
});
router.post("/logout",(req,res)=>{
    req.session.destroy((err)=>{console.log(err)})
    console.log("session destroyed");
    res.json({msg:"session destroyed"})
});
module.exports= router