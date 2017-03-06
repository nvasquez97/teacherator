"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var reviewController = require("./controllers/reviewController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", reviewController);

app.listen(process.env.PORT || 3000, function () {
    console.log("Started listening on port", 3000);
});

// Connect to mongodb database
//mongoose.connect("mongodb://localhost/reviewfinder");
//mongoose.connect("mongodb://nicbuitr:admin@ds119750.mlab.com:19750/heroku_42vhqtwt");