
"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");

module.exports = React.createClass({
    deleteReview: function(e){
        e.preventDefault();
        actions.deleteReview(this.props.info);
    },
    render:function(){
        var totalScore = this.props.info.totalScore;
        return(
            <div className="panel panel-default">
                <div className="bg-color panel-heading text-center">                    
                    <img src={"./img/"+totalScore+"_star.png"} className="inline-img-responsive rating-stars-img " id="stars-img" name="stars-img"/>
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteReview}>&times;</span>
                </div>
                <div className={((this.props.info.criteria_1==1)?"good-review":" bad-review")+" panel-body"}>Criteria 1: {this.props.info.criteria_1}</div>
                <div className={((this.props.info.criteria_2==1)?"good-review":" bad-review")+" panel-body"}>Criteria 2: {this.props.info.criteria_2}</div>
                <div className={((this.props.info.criteria_3==1)?"good-review":" bad-review")+" panel-body"}>Criteria 3: {this.props.info.criteria_3}</div>
                <div className={((this.props.info.criteria_4==1)?"good-review":" bad-review")+" panel-body"}>Criteria 4: {this.props.info.criteria_4}</div>
                <div className={((this.props.info.criteria_5==1)?"good-review":" bad-review")+" panel-body"}>Criteria 5: {this.props.info.criteria_5}</div>
                <div className="panel-body comments">Comments: {this.props.info.comments}</div>
            </div>
        )
    }
})