"use strict";
var React = require("react");
var actions = require("../actions/ReviewActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
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
            <form className="form" onSubmit={this.addReview}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Review Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Review Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Review</button>
                </div>
            </form>
        )
    }
})