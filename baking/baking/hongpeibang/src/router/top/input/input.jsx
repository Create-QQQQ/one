import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Input extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>我是input</div></Fragment>)
    }

}

export default withRouter(Input) ;