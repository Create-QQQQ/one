import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class feedbacktwo extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }

    render() {
        return (<Fragment>
            <div className={"feedbacktwo"}>
                <p>暂时未更新</p>
            </div>
        </Fragment>)
    }

}

export default withRouter(feedbacktwo);