var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res) {

    res.redirect("/burgers")

});

router.get("/burgers", function(req, res) {
      
    burgers.selectAll(function (data) {
        var hbs = {
            burgers: data
        };
        res.render("index", hbs)
    });

});

router.post("/burgers/create", function(req, res) {

    burgers.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(data) {
        res.redirect("/burgers");
    });

});

router.put("/burgers/update/:id", function(req, res) {

    var condition = "id = " + req.params.id;

    burgers.updateOne({
        "devoured": req.body.devoured
    }, condition, function(burger) {
       if (burger.changedRows == 0) {
           return res.status(404).end();
       } else {
           res.status(200).end();
       }
    });

});

module.exports = router;