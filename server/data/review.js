"use strict";
var mongoose = require("mongoose");
var reviewSchema = mongoose.Schema({
	criteria_1:Number,
	criteria_2:Number,
	criteria_3:Number,
	criteria_4:Number,
	criteria_5:Number,
	totalScore:Number,
	comments:String
});

module.exports = mongoose.model("review", reviewSchema);