const express = require('express');
const app=express();


const connectDB= require('./config/db');
connectDB();

app.use(express.json({extended:true}));

app.use("/register", require('./routes/register'));

const port= process.env.port || 5000;

app.listen(port,()=>console.log(`server started at the port ${port}`));