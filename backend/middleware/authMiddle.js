

function authMiddle(req,res,next){
if(req.session.valid)
  next();
else return res.status(401).json({msg:"not login "});

}

 module.exports = authMiddle