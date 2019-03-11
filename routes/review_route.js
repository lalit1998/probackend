var express = require("express");
var router = express.Router();
var review = require("../model/review_model");
router.get('/:fk_pro_id', function(req, res, next) {
    review.getAllReview(req.params.fk_pro_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/',function(req,res,next){
    review.addReview(req.body,function(err,rows){
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
module.exports = router;