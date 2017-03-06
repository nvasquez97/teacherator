
"use strict";
var React = require("react");
//var actions = require("../actions/TeacherActions");

module.exports = React.createClass({
    /*deleteTeacher: function(e){
        e.preventDefault();
        actions.deleteTeacher(this.props.info);
    },*/
    render:function(){
        return(
            <div className="jumbotron teacher-info">
                <div className="container">
                    <div className="row">
                       <img src="./img/xavier.png" className="teacher-profile-img inline-img-responsive" />
                        <h2>Charles Francis Xavier (Professor X) </h2>
                        <hr/>
                        <div className="container">
                            <h4>Mutant rights activist, geneticist, teacher, formerly adventurer, soldier</h4>
                        </div>
                        <hr/>
                        <div className="text-left">
                            <h5><strong>Studies</strong></h5>
                            <ul>
                                <li>
                                    Ph.D in Genetics
                                </li>
                                <li>
                                    Ph.D in Biophysics
                                </li>
                                <li>
                                    Ph.D in Psychology
                                </li>
                                <li>
                                    Ph.D in Anthropology
                                </li>
                                <li>
                                    M.D. in Psychiatry
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="text-left">
                            <h5><strong>Classes given</strong></h5>
                            <ul>
                                <li>
                                    Genetics 101
                                </li>
                                <li>
                                    Introduction to Biophysics
                                </li>
                                <li>
                                    Psychology of the Gifted
                                </li>
                                <li>
                                    Anthropology Basics
                                </li>
                                <li>
                                    Psychiatry for the Ill Minded
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})