var express = require("express");
var router = express.Router();
var wish = require("../model/wish_model");
router.get('/:fk_user_id', function(req, res, next) {
    wish.getWishByUserid(req.params.fk_user_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/', function(req, res, next) {
    wish.deleteAllWishList(req.body,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.delete('/:id', function(req, res, next) {
    wish.AllDeleteWish(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  module.exports = router;
