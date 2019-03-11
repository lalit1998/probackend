var express = require("express");
var router = express.Router();
var product = require("../model/product_model");
router.put('/',function(req,res,next){
    product.UpdateQty(req.body,function(err,rows){
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
   module.exports = router;