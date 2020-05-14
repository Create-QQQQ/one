import React, {Component} from "react";
import {withRouter} from "react-router";
class WEIXIN extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (<div className={"WEIXINcolocr"}>
            <p className={"WEIXINcolocrp"}>微信登录</p>
            <img className={"WEIXINimg"} alt={"标本"} src={require('E:\\baking\\hongpeibang\\src\\img\\qrcode_for_gh_98d29a03a480_860.jpg')}/>
            <p className={"WEIXINcolocrspan"}>请拿手机微信登录，扫一扫</p>
        </div>
        )
    }

}

export default withRouter(WEIXIN);