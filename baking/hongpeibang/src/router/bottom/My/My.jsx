import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class My extends Component {
    constructor() {
        super();
        this.state = {
            img:[],
            title:[]
        }
    }
    addsingup=()=>{
        this.props.history.push('/Singup')
    }
    addweixin=()=>{
        this.props.history.push('/WEIXIN')
    }
    add=()=>{
        this.props.history.push('/Agreement')
    }
    aoo=()=>{
        this.props.history.go(-1)
    }
    async componentDidMount(){
        const img = await  this.$axios.get("/img/FoBGm71FF5SYiTw0Wc0xkeiL3eQz?imageMogr2/strip/thumbnail/510x510")
        this.setState({
            img:img.config.url
        })
    }
    render() {
        return (<Fragment>
            <div className={"LOGIN"}>
            <i className="el-icon-arrow-left" onClick={this.aoo}></i>
            <h3>登录</h3>
                <div className={"LOGINIMG"}>
                <img alt={"标本"} src={this.state.img}/>
                </div>
                <div className={"WEIXIN"}>
                    <div onClick={this.addweixin}>使用微信登录</div>
                </div>
                <div className={"Other"}>
                    <div onClick={this.addsingup}>其他方式登录</div>
                </div>
                <div className={"Agreement"}>
                    <span onClick={this.add}>登录代表同意协议</span><span className={"spancolor"} onClick={this.add}>服务条款</span>
                </div>
            </div>
        </Fragment>)
    }

}
const six = 6;
export default withRouter(My,six);