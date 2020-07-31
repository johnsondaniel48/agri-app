require('dotenv').config();

const jwt = require('jsonwebtoken');

const auth=(req,res,next)=>{
    const token =  req.header('auth-token');
    if(!token){
       return res.status(401).json({msg:"No token, Access denied"});
    }
    try{
        const tokenDecoded= jwt.verify(token, process.env.secret);
        req.user=tokenDecoded.user;
        next();
    }
    catch(err){
        res.status(401).json({msg:'Invalid token'});
    }
}

module.exports= auth;