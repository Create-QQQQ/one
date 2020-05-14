import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {i} from "element-react";
class account extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.goBack()
    }
    aoo=()=>{
        this.props.history.push("/")
    }
    addprofile=()=>{
        this.props.history.push("/profile")
    }
    accountBinding=()=>{
        this.props.history.push("/accountBinding")
    }
    feedback=()=>{
        this.props.history.push("/feedback")
    }
    noticeon=()=>{
        this.props.history.push("/Agreement")
    }
    noticeone=()=>{
        this.props.history.push("/noticeone")
    }
    noticetwo=()=>{
        this.props.history.push("/noticetwo")
    }
    render() {
        return (<Fragment>

            <div className={"account"}>
            <div className={"accountone"}>
                <i className="el-icon-arrow-left" onClick={this.add}></i>
                <span>设置</span>
            </div>
            <div className={"accounttwo"}>
                <div>
                    <div onClick={this.addprofile}>
                    <span onClick={this.addprofile}>个人设置</span>
                    <i className="el-icon-arrow-right"onClick={this.addprofile} ></i>
                    </div>
                </div>
                <div>
                    <div onClick={this.accountBinding}>
                    <span onClick={this.accountBinding}>账号设置</span>
                    <i className="el-icon-arrow-right" onClick={this.accountBinding}></i>
                    </div>
                </div>

            </div>
            <div className={"accountthree"}>
                <div>
                    <div onClick={this.feedback}>
                        <span onClick={this.feedback}>意见反馈</span>
                        <i className="el-icon-arrow-right" onClick={this.feedback}></i>
                    </div>
                </div>
                <div>
                    <div onClick={this.noticeon}>
                        <span onClick={this.noticeon}>用户守则</span>
                        <i className="el-icon-arrow-right" onClick={this.noticeon}></i>
                    </div>
                </div>
                <div>
                    <div onClick={this.noticeone}>
                        <span onClick={this.noticeone}>关于我们</span>
                        <i className="el-icon-arrow-right" onClick={this.noticeone}></i>
                    </div>
                </div>
                <div>
                    <div onClick={this.noticetwo}>
                        <span onClick={this.noticetwo}>商务合作</span>
                        <i className="el-icon-arrow-right" onClick={this.noticetwo}></i>
                    </div>
                </div>
            </div>
                <div className={"accountfour"}>
                    <button onClick={this.aoo}>退出登录</button>
                </div>
            </div>
        </Fragment>)
    }

}

export default withRouter(account);