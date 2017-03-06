"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");
var starCount = 0;
var criteriaAmount = 5;

module.exports = React.createClass({
    getInitialState:function(){
      return {
          criteria_1:0,
          criteria_2:0,
          criteria_3:0,
          criteria_4:0,
          criteria_5:0,
          criteria_1_desc:"",//Terminar de cuadrar esto para pasarlo por props
          criteria_2_desc:"",
          criteria_3_desc:"",
          criteria_4_desc:"",
          criteria_5_desc:"",
          totalScore:0,
          comments:""
      }  
    },
    addReview:function(e){
        e.preventDefault();
        this.state.totalScore = starCount;
        actions.addReview(this.state);

        //Reinitialize for a new review
        starCount = 0;
    },
    handleInputChange:function(e){
      var name = e.target.name;
      var state = this.state;
      var stateValue = 0;
      
      if(name === "comments"){
        e.preventDefault();
        stateValue = e.target.value;
      }
      else{
        if (e.target.checked) {
          starCount++;
          stateValue = 1;
        }
        else{
          starCount--;
        }
      }
      document.getElementById("stars-img").src ="./img/"+starCount+"_star.png";
      state[name] = stateValue;
      this.setState(state);
    },
    render:function(){
        return(
          <div className="jumbotron">
            <div className="row text-center">
              <h2>Add Review By Choosing The Options That Apply</h2>
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
                    <input type="checkbox" className="criteria-checkbox" id="criteria_1" name="criteria_1" value={this.state.criteria_1} onChange={this.handleInputChange} />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_2">Criteria 2:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_2" name="criteria_2" value={this.state.criteria_2} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_3">Criteria 3:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_3" name="criteria_3" value={this.state.criteria_3} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_4">Criteria 4:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_4" name="criteria_4" value={this.state.criteria_4} onChange={this.handleInputChange} />                    
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <label className="control-label" htmlFor="criteria_5">Criteria 5:</label>
                  </div>
                  <div className="col-md-6 text-right"> 
                    <input type="checkbox" className="criteria-checkbox" id="criteria_5" name="criteria_5" value={this.state.criteria_5} onChange={this.handleInputChange} />                    
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