import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class BakingEncyclopedia extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>视频学堂</div></Fragment>)
    }

}

export default withRouter(BakingEncyclopedia);