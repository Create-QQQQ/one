import React, {Component} from "react";
import {i} from 'element-react';
import {withRouter} from "react-router";

class ADDTO extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/Addto')
    }
    render() {
        return (
            <div className={"top-addto"} onClick={this.add}>

            <i className="el-icon-plus" onClick={this.add}></i>
            </div>
        )}

}

export default withRouter(ADDTO) ;