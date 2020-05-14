import React, {Component} from "react";
import {withRouter} from "react-router";

class video extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/Video/Newest')
    }
    render() {
        return (<div className={"HEAD"} onClick={this.add}><img onClick={this.add} alt={"标本"} src={"https://image.hongbeibang.com/Flm_lYHJQA56h0VyhdRhQ1i5iO06?50X50&imageView2/1/w/50/h/50"}/>
        <p onClick={this.add}>视频圈</p></div>)
    }

}

export default withRouter(video) ;