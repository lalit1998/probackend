var express = require("express");
var router = express.Router();
var billdet = require("../model/billdetails_model");

router.get('/',function(req,res,next){
    billdet.GetBillDetails(function(err,rows){
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

router.post('/',function(req,res,next){
    billdet.InsertBillDetails(req.body,function(err,rows){
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
   router.get('/:fk_bill_id',function(req,res,next){
    billdet.getAllPassBillDetail(req.params.fk_bill_id,function(err,rows){
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
   module.exports=router;