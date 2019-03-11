var express = require("express");
var router = express.Router();
var order = require("../model/order_model");
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
           router.get('/:user_id',function(req,res,next){
            order.getUserNameByUserId(req.params.user_id,function(err,rows){
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