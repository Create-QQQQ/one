import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Remind extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>我是remind 闹钟</div></Fragment>)
    }

}

export default withRouter(Remind) ;