var express = require("express");
var router = express.Router();
var repair = require("../model/repair_model");
router.get('/', function(req, res, next) {
    repair.getAllRepair(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.get('/:repair_id',function(req, res, next) {
    repair.getRepairById(req.params.repair_id,function(err, rows) {
      if (err) {
        
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.post('/',function(req,res,next){
    repair.deleteAllRepairingOrder(req.body,function(err,rows){
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
    router.put('/',function(req, res, next) {
      repair.updateRepairAmt(req.body,function(err, rows) {
        if (err) {
          
          res.json(err);
        } else {
          console.log(req.body);
          res.json(rows);
        }
      });
    });
    router.delete('/:id', function(req, res, next) {
        repair.deleteRepairOrder(req.params.id, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
 module.exports=router;