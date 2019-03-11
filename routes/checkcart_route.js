var express = require("express");
var router = express.Router();
var Addcart = require("../model/addcart_model");
router.post('/',function(req,res,next){
    Addcart.CheckIntoCart(req.body,function(err,rows){
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