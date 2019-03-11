var express = require("express");
var router = express.Router();
var billoffline = require("../model/bill_model");

router.post('/',function(req,res,next){
    billoffline.addNewBillOffline(req.body,function(err,rows){
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
