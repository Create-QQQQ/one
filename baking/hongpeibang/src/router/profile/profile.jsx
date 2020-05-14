import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {i} from "element-react";
class profile extends Component {
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
                    <span>个人资料</span>
                </div>
                <div className={"accounttwo"}>
                    <div>
                        <div>
                            <span>头像</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className={"accountthree"}>
                    <div>
                        <div>
                            <span>昵称</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>性别</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>简介</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className={"accounttwo"}>
                    <div>
                        <div>
                            <span>邮箱</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className={"accountthree"}>
                    <div>
                        <div>
                            <span>收获信息</span>
                            <i className="el-icon-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>)
    }

}

export default withRouter(profile);