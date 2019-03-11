var express = require("express");
var router = express.Router();
var orderdet = require("../model/order_detail_model");

router.post('/',function(req,res,next){
    orderdet.InsertOrderDetails(req.body,function(err,rows){
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
   router.get('/:fk_order_id?',function(req,res,next){
    orderdet.GetOrderDetailsByfkoid(req.params.fk_order_id,function(err,rows){
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

// router.get('/:fk_order_id?',function(req,res,next){
//     orderdet.getOrderDetailsWithId(req.params.fk_order_id,function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         else
//         {
            
//             res.json(rows);
//         }
//     });
//    });
   module.exports=router;