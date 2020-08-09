const router=require('express').Router();
const {check,validationResult}= require('express-validator');

const auth =require('../middleware/auth');

const Requestor= require('../models/Requestor');
const { json } = require('express');

router.get('/',auth, async(req,res)=>{
    try{
        console.log(req.user.id);
        const requestors= await Requestor.find({user:req.user.id});
        res.send(requestors);
    }
    catch(err){
     console.log(err.message);
     res.status(500).send('');
    }
});

router.post('/',auth,
[
    check('plantName','Please choose a Plant').not().isEmpty(),
    check('quantity','Please choose plant Quantity').not().isEmpty(),
    check('requestorName','Please choose Requestor Name').not().isEmpty(),    
]
,async(req,res)=>{
    const validationMsg = validationResult(req);
    if(!validationMsg.isEmpty())
    {
        res.status(400).json({error:validationMsg.array()});
    }
    const {plantName,quantity,requestorName,requestorPhone,requestorType,isEligibleforGrant}= req.body;
    try{
        let requestor= new Requestor({
            user:req.user.id,
            plantName,
            quantity,
            requestorName,
            requestorPhone,
            requestorType,
            isEligibleforGrant
        });
        requestor= await requestor.save();
        res.json(requestor);
    }
    catch(err){
       console.log(err);
       res.status(500).send('Server Error');
    }
})

module.exports=router;
    
    
    

