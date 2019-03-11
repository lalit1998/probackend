var express = require("express");
var router = express.Router();
var order = require("../model/order_model");
       router.get('/',function(req,res,next){
        order.getTopOrder(function(err,rows){
            if(err)
            {
            res.json(err);
            }
            else{
            res.json(rows);
            }
            });
           });
       module.exports=router;