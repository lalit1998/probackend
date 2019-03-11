var express = require("express");
var router = express.Router();
var repair = require("../model/repair_order_model");
router.get('/', function(req, res, next) {
    repair.getAllRepairOrder(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/',function(req,res,next){
    repair.addRepairingOrder(req.body,function(err,rows){
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
    router.delete('/:id', function(req, res, next) {
      repair.deleteRepairingOrder(req.params.id, function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    });
  module.exports=router;