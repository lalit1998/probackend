var express = require("express");
var router = express.Router();
var Addcart = require("../model/addcart_model");
router.get('/', function(req, res, next) {
    Addcart.getAllCart(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.get('/:fk_user_id',function(req,res,next){
    Addcart.getCartByUserId(req.params.fk_user_id,function(err,rows){
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
    Addcart.deleteCartOrder(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/', function(req, res, next) {
    Addcart.addtoCart(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });


    
  module.exports = router;
