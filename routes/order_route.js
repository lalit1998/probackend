var express = require("express");
var router = express.Router();
var order = require("../model/order_model");
router.get('/', function(req, res, next) {
    order.getAllOrder(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
 router.post('/',function(req,res,next){
   order.deleteAllOrder(req.body,function(err,rows){
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
   router.put('/',function(req,res,next){
    order.UpdateStatus(req.body,function(err,rows){
        if(err)
        {
        res.json(err);
        }
        else{
        res.json(rows);
        }
        });
       });
       router.delete('/:id', function(req, res, next) {
        order.deleteOrder(req.params.id, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
 module.exports=router;