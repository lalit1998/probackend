var express = require("express");
var router = express.Router();
var Addcart= require("../model/addcart_model");
  router.get('/:cart_id',function(req,res,next){
    Addcart.getCartBypro_id(req.params.cart_id,function(err,rows){
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
