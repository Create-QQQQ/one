import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class My extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>我是my</div></Fragment>)
    }

}

export default withRouter(My);