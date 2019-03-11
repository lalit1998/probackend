var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');

router.get('/:email_id',function(req,res,next){
    User.getForgetPassword(req.params.email_id,function(err,rows){
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