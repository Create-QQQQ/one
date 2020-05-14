import React, {Component} from "react";
import {withRouter} from "react-router";
import {Input} from "element-react";
class INput extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/INput')
    }
    render() {
        return (
            <div className={"top-input"} onClick={this.add}>
                <Input
                    onIconClick={this.add}
                    autoFocus={true}
                    type="text"
                    autosize={{ minRows: 1, maxRows: 4}}
                    placeholder="请输入内容"
                />
            </div>
        )}

}

export default withRouter(INput);