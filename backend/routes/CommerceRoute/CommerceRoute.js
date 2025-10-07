const express = require("express")
const router = express.Router();
const ProduceModel = require("../../Model/produce");
const authMiddle = require("../../middleware/authMiddle");



router.get("/produce", authMiddle, async (req,res)=>{
     const produce = await ProduceModel.find().limit(20);
     console.log(produce);
     res.json(produce);
});









module.exports= router;