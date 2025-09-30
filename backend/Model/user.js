const  {Schema,model}= require("mongoose")

const user = new Schema({
    name:String,
    email:{type:String , required:true ,unique:true},
    password:String,
})

const UserModel = model("UserModel",user);

module.exports = UserModel;