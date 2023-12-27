const mongoose =require('mongoose')

//Creting Schema 
//Schemas
const Schema = mongoose.Schema;
const TaskSchema= new Schema(
  {
   title:{
    type:String,
    require:true
   },
   description:{
    type:String,
   },
  },

   {timestamps:true} //Time stamp has to be given outside the Schemas 
);
 /* 
                                        |->Passing the Schema
                                        |       */
module.exports = mongoose.model("Task",TaskSchema);