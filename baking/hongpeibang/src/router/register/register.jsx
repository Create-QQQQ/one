import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class register extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
  add=()=>{
        this.props.history.go(-1)
  }

    render() {
        return (<Fragment>
            <div className={"register"}>
             <div className={"one"}>
            <span onClick={this.add}>取消</span>
                 <p>手机验证</p>
             </div>
                <div className={"two"}>
                    <div>
                        <p >请验证你的手机验证码，确认是本人操作
                        <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;后，再进行修改密码</p></div>
                    <div>
                        <div className={"three"}>
                        <select className={"select"}>
                            <option className={"phoneop"}>86</option>
                        </select>
                            <input ref={"input"}  placeholder={"请输入手机号"} className={"threeinput"} />
                            <input ref={"input"}  placeholder={"请输入验证码"} className={"Input"} />
                            <div>
                                验证码
                            </div>
                        <span>
                            换一张
                        </span>
                        </div>
                    </div>
                </div>
                <div className={"four"}>
                <button>下一步</button>
                </div>
                </div>
        </Fragment>)
    }

}

export default withRouter(register);