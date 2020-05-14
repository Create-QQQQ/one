import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class QQ extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment>
            <div className={"QQ"}>
            <img alt={"QQ"} src={"//imgcache.qq.com/ptlogin/v4/style/42/images/logo_upice.png?v=20180125"}/>
            <p> 亿万用户已选择QQ帐号登录应用</p>
                <button>一键登录</button>
                <span>烘焙帮将获得以下权限:</span>
                <li><i className="el-icon-check"></i>访问你的详细资料(必选)</li>
                <li><i className="el-icon-check"></i>访问你的基础资料(必选)</li>
            </div>
        </Fragment>)
    }

}

export default withRouter(QQ);