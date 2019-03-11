var express = require('express');
 var router = express.Router();
 var getAllUser=require('../model/user_model');
 router.get('/:type?',function(req,res,next){
    getAllUser.getAllUser(req.params.type,function(err,rows){
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
