var express = require("express");
var router = express.Router();
var bill = require("../model/bill_model");
var billdel=require("../model/billdetails_model");
// router.get('/', function(req, res, next) {
//     bill.getAllBills(function(err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   });
  router.get('/',function(req,res,next){
    bill.getUserNameByBill(function(err,rows){
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
    bill.addNewBill(req.body,function(err,rows){
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
