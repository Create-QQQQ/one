import React, {Component} from "react";
import {withRouter} from "react-router";

class Remind extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/Remind')
    }
    render() {
        return (
            <div className={"top-remind"} onClick={this.add}>
                <img onClick={this.add} alt={"标本"} src={"https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"} />
            </div>
        )
    }

}

export default withRouter(Remind) ;