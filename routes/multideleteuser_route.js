var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');
 router.post('/',function(req,res,next){
   User.deleteAllUser(req.body,function(err,rows){
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