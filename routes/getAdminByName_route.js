var express = require("express");
var router = express.Router();
var getAdmin = require("../model/user_model");

router.get('/:email_id',function(req,res,next){
    getAdmin.getAdminByName(req.params.email_id,function(err,rows){
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
    router.put('/:email_id?',function(req,res,next){
        getAdmin.UpdateAdmin(req.params.email_id,req.body,function(err,rows){
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
