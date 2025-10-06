const express = require("express")
const UserModel = require("../Model/user.js")
const router = express.Router();


router.post("/sign", async(req,res)=>{
     const {name,email, password} = req.body;
  
    if( await UserModel.findOne({email}) ){
        res.status(401).json({mesg:"user email already exist"});
    }
    
     const userdata = new UserModel({name:name,email:email, password:password})
     await userdata.save();
     res.send("msg")
})


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