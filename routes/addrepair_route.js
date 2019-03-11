var express = require("express");
var router = express.Router();
var repair = require("../model/repair_model");

 router.post('/',function(req,res,next){
    repair.addRepairing(req.body,function(err,rows){
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