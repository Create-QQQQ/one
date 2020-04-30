import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {i} from "element-react";

class Addto extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    aoo=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (<Fragment><i className="el-icon-arrow-left" onClick={this.aoo}></i>
            <br/><div>addto组件</div></Fragment>)
    }

}

export default withRouter(Addto);