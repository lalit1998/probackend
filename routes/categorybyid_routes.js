var express = require("express");
var router = express.Router();
var category = require("../model/category_model");
router.get('/:cat_id',function(req,res,next){
    category.getCategoryById(req.params.cat_id,function(err,rows){
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