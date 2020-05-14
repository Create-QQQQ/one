import React, {Component} from "react";
import {withRouter} from "react-router";

class circle extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/Circle')
    }
    render() {
        return (<div className={"HEAD"} onClick={this.add}><img  onClick={this.add} alt={"标本"} src={"https://image.hongbeibang.com/Fkpdn7F9EWxvNeSS8M7V4_xbRPlf?50X50&imageView2/1/w/50/h/50"}/>
        <p  onClick={this.add}>烘培圈</p></div>)
    }

}

export default withRouter(circle) ;