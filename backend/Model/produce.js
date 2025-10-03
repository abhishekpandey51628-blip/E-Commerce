const  {Schema,model, Types}= require("mongoose");



const produce = new Schema({
   ProduceName:{type:String,  required:true , unique:true},
   img:String,
   description:{},
  
})
const ProduceModel = model("ProduceModel",produce);

module.exports = ProduceModel;