"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");
var starCount = 0;
var criteriaAmount = 5;

module.exports = React.createClass({
    getInitialState:function(){
      return {
          criteria_1:false,
          criteria_2:false,
          criteria_3:false,
          criteria_4:false,
          criteria_5:false,
          comments:""
      }  
    },
    addReview:function(e){
        e.preventDefault();
        actions.addReview(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
          <div className="jumbotron">
            <div className="row text-center">
              <h2> Add Review</h2>
              <hr/>
              <img src="./img/0_star.png" className="inline-img-responsive rating-stars-img " id="stars-img" name="stars-img"/>
              <hr/>
            </div>
            <form className="form" onSubmit={this.addReview}>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_1">Criteria 1:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_1" name="criteria_1" checked={this.state.criteria_1} onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_2">Criteria 2:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_2" name="criteria_2" checked={this.state.criteria_2} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_3">Criteria 3:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_3" name="criteria_3" checked={this.state.criteria_3} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_4">Criteria 4:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_4" name="criteria_4" checked={this.state.criteria_4} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_5">Criteria 5:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_5" name="criteria_5" checked={this.state.criteria_5} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label" htmlFor="comments">Suggestions, compliments, rants or comments:</label>
                <input type="text" className="form-control" id="comments" name="comments" value={this.state.comments} onChange={this.handleInputChange} placeholder="Write here any suggestion, compliment, rant or comment you may have..." />                    
              </div>
              <div className="form-group text-center">
                <button className="btn" type="submit">Add Review</button>
              </div>
            </form>
          </div>
        )
    }
})