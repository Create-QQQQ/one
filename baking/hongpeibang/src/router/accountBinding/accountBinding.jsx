import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {i} from "element-react";

class accountBinding extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (<Fragment>
            <div className={"account"}>
                <div className={"accountone"}>
                    <i className="el-icon-arrow-left" onClick={this.add}></i>
                    <span>账号设置</span>
                </div>
                <div className={"accountthree"}>
                    <div>
                        <div>
                            <span>手机绑定</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className={"accountthree"}>
                    <div>
                        <div>
                            <span>QQ</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>微信</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>)
    }

}

export default withRouter(accountBinding);