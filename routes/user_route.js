var express = require('express');
 var router = express.Router();
 var User=require('../model/user_model');
 router.post('/:email_id',function(req,res,next){
    User.getLogin(req.params.email_id,req.body,function(err,rows){
     if(err)
      {
        console.log(err);
      res.json(err);
      }
      else{
      res.json(rows);
      console.log(rows);
      }
      });
});
router.post('/',function(req,res,next){
      User.AddUser(req.body,function(err,rows){
        if(err)
        {
        console.log(err);
        }
        else
        {
        res.json(rows);
        }
      });
    });
    router.get('/:id?',function(req,res,next){
          User.getUserById(req.params.id,function(err,rows){
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
    router.put('/',function(req,res,next){
      User.UpdatePassword(req.body,function(err,rows){
        if(err){
          res.json(err);
        }
        else{
          res.json(rows);
        }
      });
    });
    router.put('/:id?',function(req,res,next){
        User.UpdateUser(req.params.id,req.body,function(err,rows){
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
       router.delete('/:id', function(req, res, next) {
        User.deleteUser(req.params.id, function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
    
      
    
module.exports=router;
