import React, {Component, Fragment} from "react";
import {i} from 'element-react';
import {withRouter} from "react-router";

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    aoo=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (<Fragment><i className="el-icon-arrow-left" onClick={this.aoo}></i> <div>我是问答</div></Fragment>)
    }

}

export default withRouter(Circle);