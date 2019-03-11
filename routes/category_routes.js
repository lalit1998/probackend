var express = require("express");
var router = express.Router();
var category = require("../model/category_model");
router.get('/', function(req, res, next) {
    category.getAllCategory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/', function(req, res, next) {
    category.addCategory(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.put('/:id', function(req, res, next) {
    category.updateCategory(req.params.id,req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.delete('/:id', function(req, res, next) {
    category.deleteCategory(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  
  module.exports = router;