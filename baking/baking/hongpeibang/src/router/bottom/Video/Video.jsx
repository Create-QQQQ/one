import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Video extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>我是视频圈</div></Fragment>)
    }

}

export default withRouter(Video);