const express=require('express');
const cors=require('cors');
const {mongoclient} = require ('mongodb')


//create a objective  for express
const app=new express();
 app.use(express.json());
  app.use(cors());

  
// res & respond
app.get('/home',(req,res)=>{
    res.send("home page");
  })


  app.listen(8081); 
  console.log("server Runnging");
   

  