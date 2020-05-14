import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {HashRouter as Router,NavLink,Route,Switch} from "react-router-dom";
import {i} from "element-react";
import feedbackone from "../feedbackone/feedbackone";
import feedbacktwo from "../feedbacktwo/feedbacktwo";
class feedback extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push("/account")
    }
    render() {
        return (<Fragment>
            <div>
            <div className={"feedback"}>
                <div className={"feedbackone"}>
                    <i className="el-icon-arrow-left" onClick={this.add}></i>
                    <ul><li><NavLink to={"/feedback/feedbackone"}>写意见</NavLink></li><li><NavLink to={"/feedback/feedbacktwo"}>历史回复</NavLink></li></ul>
                </div>
            </div>
            <Router>
                <Switch>
                    <Route exact component={feedbackone} path={"/feedback/feedbackone"}></Route>
                    <Route component={feedbacktwo} path={"/feedback/feedbacktwo"}></Route>
                </Switch>
            </Router>
            </div>
        </Fragment>)
    }

}

export default withRouter(feedback);