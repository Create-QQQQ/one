import React, {Component} from "react";
import {withRouter} from "react-router";

class home extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push("/")
    }
    render() {
        return (<div className={"HEAD"} onClick={this.add}>
            <img  onClick={this.add} alt={"标本"} src={"https://image.hongbeibang.com/FsxN7RUFRJ9Zdris5Z22haR2xIhj?50X50&imageView2/1/w/50/h/50"}/>
            <p onClick={this.add}>学烘培</p></div>)
    }

}

export default  withRouter(home) ;