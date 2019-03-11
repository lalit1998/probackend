var express = require("express");
var router = express.Router();
var order = require("../model/order_model");
router.get('/:user_name',function(req,res,next){
    order.getOrderByUserName(req.params.user_name,function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else{
        res.json(rows);
        }
        });
       });
       router.get('/',function(req,res,next){
        order.getTodaysOrder(function(err,rows){
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