"use strict";
var mongoose = require("mongoose");
var reviewSchema = mongoose.Schema({
	criteria_1:Boolean,
	criteria_2:Boolean,
	criteria_3:Boolean,
	criteria_4:Boolean,
	criteria_5:Boolean,
	comments:String
});

module.exports = mongoose.model("review", reviewSchema);