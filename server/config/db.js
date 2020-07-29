require('dotenv').config();
const mongoose= require('mongoose');

const url=process.env.URL;
const connectDB= async () =>{
    try{
        await mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true})
        console.log("connected to mongoDB");
    }
    catch(err){
        console.log(err.message);
        process.exit();
    }
}
module.exports=connectDB