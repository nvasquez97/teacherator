"use strict";
var mongoose = require("mongoose");
var reviewSchema = mongoose.Schema({
    name: String,
    tagline: String
});

module.exports = mongoose.model("review", reviewSchema);