"use strict";
var dispatcher = require("../dispatcher");

module.exports = {
    addReview:function(review){
        dispatcher.dispatch({
           review:review,
           type:"review:addReview" 
        });
    },
    deleteReview:function(review){
        dispatcher.dispatch({
           review:review,
           type:"review:deleteReview" 
        });
    }
}