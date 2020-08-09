const mongoose= require('mongoose');
const requestorSchema=new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    plantName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    requestorName:{
        type:String,
        required:true
    },
    requestorPhone:{
        type:String,
        required:true
    },
    requestorType:{
        type:String,
        required:true
    },
    isEligibleforGrant:{
        type:Boolean,
        default:true
    }
});

module.exports=mongoose.model('requestor',requestorSchema);