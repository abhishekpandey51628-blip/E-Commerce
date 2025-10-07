const  {Schema,model, Types}= require("mongoose")

const pmodel = new Schema({
    name:{type:String, unique:true , required:true },
    price:{type:Number ,required:true },
    description:{}
})

const ProduceModel = model("ProduceModel",pmodel);

module.exports = ProduceModel; 