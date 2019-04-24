var express = require("express");
var router = express.Router();
var wish = require("../model/wish_model");
  router.post('/',function(req,res,next){
    wish.CheckWish(req.body,function(err,rows){
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