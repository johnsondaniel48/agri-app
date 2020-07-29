const { model } = require('mongoose');
const {check,validationResult}=require('express-validator');

const router= require('express').Router();

const user= require('../models/User');

router.post('/',
[
    check('name','Please provide a name').not().isEmpty(),
    check('email','Please provide email').isEmail(),
    check('password','Password must be 6 character long').isLength({min:6})
], (req,res)=>{
   const validationMessage = validationResult(req);
    if(!validationMessage.isEmpty()){
    return res.status(400).json({errors:validationMessage.array()});
    }
    
   const {name,email,password}=req.body;
   try{
       let user= await 

   }
   catch(err){

   }
})

module.exports=router;