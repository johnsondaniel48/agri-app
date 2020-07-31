const { model } = require('mongoose');
const {check,validationResult}=require('express-validator');
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
const auth=require('../middleware/auth');
const { Router } = require('express');

router.get('/', auth, async (req,res)=>{

    try{
         const user= await User.findById(req.user.id).select("-password");
          res.json(user);
    }
    catch(err)
    {
       console.error(err.message);
       res.status(500).json({msg:'Server error'})
    }

});

router.post('/',
[
    check('email','Please provide email').isEmail(),
    check('password','Password must be 6 character long').exists()
], async (req,res)=>{
   const validationMessage = validationResult(req);
    if(!validationMessage.isEmpty()){
    return res.status(400).json({errors:validationMessage.array()});
    }
    
   const {email,password}=req.body;
   try{
       let user= await User.findOne({email});
       if(!user){
           return res.status(400).json({msg:"Invalid credentials"});
       }
       
       const match = bcrypt.compare(password,user.password);

       if(!match){
        return res.status(400).json({msg:"Invalid credentials 1"});
       }


       const payload= {
           user:{
               id:user.id
           }
       }

       jwt.sign(payload,process.env.secret,{expiresIn:3600},(err,token)=>{
           if(err)
           throw err;
           res.send({token});
       })

   }
   catch(err){
    console.log(err.message);
    res.status(500).send('server error')
   }
})

module.exports=router;