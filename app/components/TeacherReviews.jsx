"use strict";
var React = require("react");
var TeacherInfo = require("./TeacherInfo.jsx")
var ReviewInfo = require("./ReviewInfo.jsx")
var AddReview = require("./AddReview.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-5">
                    <TeacherInfo />
                </div>
                <div className="col-md-7">
                <AddReview />
                    {
                        this.props.reviews.reverse().map(function(s,index){
                            return(
                                <ReviewInfo info={s} key={"review"+index} />
                               /*Podría filtrar para que no le muestre todos los reviews, 
                               ya que cuando son muchos no se ve esteticamente bien*/
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});
