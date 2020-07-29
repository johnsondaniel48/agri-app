const { model } = require('mongoose');
const {check,validationResult}=require('express-validator');
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');


router.post('/',
[
    check('name','Please provide a name').not().isEmpty(),
    check('email','Please provide email').isEmail(),
    check('password','Password must be 6 character long').isLength({min:6})
], async (req,res)=>{
   const validationMessage = validationResult(req);
    if(!validationMessage.isEmpty()){
    return res.status(400).json({errors:validationMessage.array()});
    }
    
   const {name,email,password}=req.body;
   try{
       let user= await User.findOne({email});
       if(user){
           return res.status(400).json({msg:"user already exists"});
       }

       user = new User({
           name,
           email,
           password
       })

       const salt= await bcrypt.genSalt(10);
       user.password=await bcrypt.hash(password,salt);
       await user.save();

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