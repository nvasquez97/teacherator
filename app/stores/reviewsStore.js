"use strict";
var dispatcher = require("../dispatcher");
var reviewsService = require("../services/reviewsService");

function ReviewStore() {
    var listeners = [];

    function onChange(listener) {
        getReviews(listener);
        listeners.push(listener);
    }
    
    function getReviews(cb){
        reviewsService.getReviews().then(function (res) {
            cb(res);
        });
    }

    function addReview(review) {
        reviewsService.addReview(review).then(function (res) {
            triggerListeners();
        });
    }

    function deleteReview(review) {
        reviewsService.deleteReview(review).then(function (res) {
            triggerListeners();
        });
    }

    function triggerListeners() {
        getReviews(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "review") {
            switch (split[1]) {
                case "addReview":
                    addReview(payload.review);
                    break;
                case "deleteReview":
                    deleteReview(payload.review);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = ReviewStore();