var express = require("express");

var router = express.Router();

// always wanna make sure you have a reference to your database in your route handlers.
var db = require("../models/index.js");

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
    // you don't want to parseInt on the devoured property since it's a boolean value
    update: { devoured: req.body.devoured },
    // sequelize is nice enough to cast the string version of the id inot an integer for us so you can skip doing so next time.
    where: {where: { id: req.params.id } }
  };

  db.Burgers.update(burger.update, burger.where).then(data => {
    res.redirect('/');
  });
});


module.exports = router;