var express = require("express");
var router = express.Router();
var Addcart = require("../model/addcart_model");

router.get('/:fk_user_id',function(req,res,next){
    Addcart.getCartCoutntById(req.params.fk_user_id,function(err,rows){
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