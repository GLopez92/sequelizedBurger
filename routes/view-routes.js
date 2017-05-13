var path = require('path');

var db = require("../models/index.js");

var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
  db.Burgers.findAll().then(data => {
    var burgersList = {
      burgers: data
    };
    res.render("index", burgersList );
  });
});


module.exports = router;