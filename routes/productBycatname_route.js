var express = require("express");
var router = express.Router();
var product = require("../model/product_model");
router.get('/:cat_name',function(req,res,next){
    product.getProductByCatName(req.params.cat_name,function(err,rows){
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