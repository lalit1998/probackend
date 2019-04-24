var express = require("express");
var router = express.Router();
var contact = require("../model/contact_model");
  router.post('/',function(req,res,next){
    contact.AddContact(req.body,function(err,rows){
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