var express = require('express');
 var router = express.Router();
 var Category=require('../model/category_model');
 router.post('/',function(req,res,next){
   Category.deleteAllCategory(req.body,function(err,rows){
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