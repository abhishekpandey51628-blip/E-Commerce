
const authMiddle  =(req,res,next)=>{
    if( req.session.valid){next}
    else  res.status(401).json({msg:"user not allowd"});
}

module.exports=authMiddle;