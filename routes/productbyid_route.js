var express = require("express");
var router = express.Router();
var product = require("../model/product_model");
router.get('/:pro_id',function(req,res,next){
    product.getProductById(req.params.pro_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
   });
   router.get('/:cat_id/:pro_id',function(req,res,next){
    product.getAllCataByNotId(req.params.cat_id,req.params.pro_id,function(err,rows){
        if(err)
       {
       res.json(err);
       }
       else{
       res.json(rows);
       }
       });
      });

   module.exports = router;