var express = require("express");
var router = express.Router();
var wish = require("../model/wish_model");
router.get('/', function(req, res, next) {
    wish.getAllWishList(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/',function(req,res,next){
    wish.addWishList(req.body,function(err,rows){
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
    wish.deleteWish(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;
