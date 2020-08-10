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
        console.log(req.user.id);
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

router.delete('/:id',auth,async(req,res)=>{
    try
    {
        let requestor= Requestor.findById(req.params.id);
        if(!requestor){
            res.status(404).send({msg:'Requestor is not found'})
        }
        await Requestor.findByIdAndRemove(req.params.id);
        res.send('Requestor removed');
    }
    catch(err)
    {
        console.log(err);

    }
})

router.put('/:id',auth,async(req,res)=>{
    const { plantName,
        quantity,
        requestorName,
        requestorPhone,
        requestorType,
        isEligibleforGrant}=req.body;

        const updatedRequestor= { plantName,
        quantity,
        requestorName,
        requestorPhone,
        requestorType,
        isEligibleforGrant};
  console.log(updatedRequestor);
  console.log(req.params.id);
        try {
            
            let requestor =await Requestor.findById(req.params.id);
            console.log('find completed');
            if(!requestor){
                updatedRequestor = await Requestor.findByIdAndUpdate(req.params.id, {$set: updatedRequestor}, {new: true} );
                console.log('find completed');
                res.send(updatedRequestor);
            }
        } catch (err) {
            console.error(err)
            res.status(500).send("Server Error");
        }
})

module.exports=router;
    
    
    

