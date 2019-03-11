var express = require("express");
var router = express.Router();
var change = require("../model/user_model");
router.put('/',function(req,res,next){
    change.changepassword(req.body,function(err,rows){
        if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
    });
});

module.exports = router;