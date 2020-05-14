import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Follow extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment>
            <p className={"Followme"}>暂无关注</p>
        </Fragment>)
    }

}

export default withRouter(Follow);