import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Noviceguide extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment><div>新手指南</div></Fragment>)
    }

}

export default withRouter(Noviceguide);