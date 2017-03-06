
"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");

module.exports = React.createClass({
    deleteReview: function(e){
        e.preventDefault();
        actions.deleteReview(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteReview}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})