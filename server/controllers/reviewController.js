"use strict";
var mongoose = require("mongoose");
var Review = require("../data/review");
var _ = require("underscore");

var router = require("express").Router();
router.route("/reviews/:id?").get(getReviews).post(addReview).delete(deleteReview);

function getReviews(req, res) {
    Review.find(function (err, reviews) {
        if (err)
            res.send(err);
        else
            res.json(reviews);
    });
}

function addReview(req, res) {
    var review = new Review(_.extend({}, req.body));
    review.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(review);
    });
}

function deleteReview(req, res) {
    var id = req.params.id;
    Review.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;