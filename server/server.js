 const express =require('express');
 const app = express();
 require('dotenv').config();
 const mongoose=require("mongoose");
 const taskRoutes = require('./routes/taskRoute');
  

//Middleware
app.use((req,res,next)=>{
  console.log('path'+req.path+"method"+req.method);
  next();
})

app.use(express.json());

app.get("/",(req,res)=>{
  res.send("hello world");
})

//DB connection 
mongoose.connect(process.env.MONGO)
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log("DB connected & listening to "+process.env.PORT);
   })
   }).catch((error)=>console.log(error));


   app.use('/api/tasks',taskRoutes);



 