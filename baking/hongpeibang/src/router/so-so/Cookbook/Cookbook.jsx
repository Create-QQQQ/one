import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Cookbook extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>我是食谱分类</div></Fragment>)
    }

}

export default withRouter(Cookbook);