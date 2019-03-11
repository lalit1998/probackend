var express = require("express");
var router = express.Router();
var offer = require("../model/offer_model");
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
    offer.getAllProductOfHighRate(function(err,rows){
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
