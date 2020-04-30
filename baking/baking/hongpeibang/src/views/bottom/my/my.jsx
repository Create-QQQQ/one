import React, {Component} from "react";
import {withRouter} from "react-router";

class my extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/My')
    }
    render() {
        return (<div className={"HEAD"} onClick={this.add}><img onClick={this.add} alt={"标本"} src={"https://image.hongbeibang.com/FrYeKj0MohOJQuNzUgCugg90cHCS?50X50&imageView2/1/w/50/h/50"}/>
        <p onClick={this.add}>我</p></div>)
    }

}

export default withRouter(my) ;