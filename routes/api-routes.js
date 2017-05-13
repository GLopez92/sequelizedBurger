var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.post('/new', (req, res) => {
  var burger = {
    burger_name: req.body.burger_name
  };
  db.Burgers.create(burger).then(data => {
    res.redirect('/');
  })
});

router.put('/:id', (req, res) => {
  var burger = {
    update: {devoured:parseInt(req.body.devoured)},
    where: {where:{id:parseInt(req.params.id)}}
  };
  db.Burgers.update(burger.update,burger.where).then(data => {
    res.redirect('/');
  });
});


module.exports = router;