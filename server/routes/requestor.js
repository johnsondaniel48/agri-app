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




    


  
  
  
    
      
      
      
    
    
    
      // get both selectors
var dropdowns = document.querySelectorAll('.ac-register-interest-form select');
// for every dropdown
Array.from(dropdowns).forEach(function (dropdown, index) {
    // watch for it to change
    dropdown.addEventListener('change', (e) => {
        // determine what the other selector is
        // (the first one has ID 0, so the second one must have ID 1)
        // (we just swap the number between 0 and 1 depending on what dropdown has been selected)
        otherDropdownIndex = 1 - index;
        // for every item within the OTHER dropdown
        
        for(var dropdownIter=0; dropdownIter<=2; dropdownIter++){
           
            if(index!=dropdownIter){
              for (var dropdownValueIter = 0; dropdownValueIter < dropdowns[dropdownIter].length; dropdownValueIter++) {
               // check to see if they're the same
                if((dropdowns[dropdownIter][dropdownValueIter].value.toLowerCase() == dropdown.value.toLowerCase())|| dropdowns[dropdownIter][dropdownValueIter].value.toLowerCase() == dropdowns[dropdownIter].value)
                {   // if they are the same, disable it!
                dropdowns[dropdownIter][dropdownValueIter].disabled = true ;
                }else{
                    dropdowns[dropdownIter][dropdownValueIter].disabled = false; 
                }
             }
           }
        }
    });
});
    
    
  
  

