"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var TeacherReviews = require("./components/TeacherReviews.jsx");
var reviewsStore = require("./stores/reviewsStore");
var _reviews = [];
var getReviewsCallback = function(reviews){
    _reviews = reviews;
    render();
};

reviewsStore.onChange(getReviewsCallback);

function render(){
    ReactDOM.render(<TeacherReviews reviews={_reviews} />, document.getElementById("container"));    
}