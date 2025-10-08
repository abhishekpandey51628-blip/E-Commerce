const express = require("express")
const router = express.Router();
const ProduceModel = require("../../Model/produce");
const authMiddle = require("../../middleware/authMiddle");



router.get("/product", authMiddle, async (req,res)=>{
     const produce = await ProduceModel.find().limit(20);
     console.log(produce);
     res.json(produce);
});

router.get("/product_specific",async(req,res)=>{
      r
});
router.post("/product",authMiddle,async(req,res)=>{
     const {name, price, description} = req.body;
      const product = await new  ProduceModel({name,price,description});
      await product.save();
       res.send("done");
})







module.exports= router;