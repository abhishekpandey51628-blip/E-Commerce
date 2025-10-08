const express = require("express")
const router = express.Router();
const ProduceModel = require("../../Model/produce");
const authMiddle = require("../../middleware/authMiddle");



router.get("/product", authMiddle, async (req,res)=>{
     const produce = await ProduceModel.find().limit(20);
     console.log(produce);
     res.json(produce);
});

router.get("/product_id",async(req,res)=>{
       const {id} = req.id;
       let product_ById = await ProduceModel.findOne({id});

     res.json(product_ById);
});
router.get("/product_category", async (req,res)=>{
       const {category } = req.body;
       let product_list= await ProduceModel.find({category});
         res.json(product_list);
});
router.post("/product",authMiddle,async(req,res)=>{
     const {name, price, description,img ,category} = req.body;
      const product = await new  ProduceModel({name,price,description,img,category});
      await product.save();
       res.json({msg:"done"});
})







module.exports= router;