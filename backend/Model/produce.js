const  {Schema,model, Types}= require("mongoose")

const pmodel = new Schema({
    id:{type:Number, unique:true , require:true},
    name:{type:String , required:true },
    price:{type:Number ,required:true },
    description:{},
    img:String,
    
})

const ProduceModel = model("ProduceModel",pmodel);

module.exports = ProduceModel; 