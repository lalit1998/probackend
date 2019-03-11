var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');
router.put('/:email_id?',function(req,res,next){
    User.UpdateUsers(req.params.email_id,req.body,function(err,rows){
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
  