import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import axios from "axios";
import {Layout} from "element-react"

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            id:[]
        }

    }
    register=()=>{
        this.props.history.push("/register")
    }
    addweixin=()=>{
        this.props.history.push('/WEIXIN')
    }
    addqq=()=>{
        this.props.history.push('/QQ')
    }
    aaa=()=>{
        this.refs.zhezhaoceng.style.display = "none";
    }
    aoo=()=>{
        if(this.refs.zhezhaoceng.style.display === "block"){
        this.props.history.go(0);
        }else{
            this.props.history.go(-1)
        }
    }
    async  add(){
        if(this.refs.input.value.length !== 11){
            this.refs.zhezhaoceng.style.display = "block";
        }
           await axios.get("/hpb/adminlist",{
                params:{
                    id:this.refs.input.value,
                    password:this.refs.inputs.value
                }
            }).then(({data})=>{
                if (data.ok===1){
                    this.setState({
                        id:this.refs.input.value
                    })
                    this.props.history.push("/singuping/id"+this.state.id)
                }else {
                    alert("账号或者密码错误")
                }
         })
    }
    render() {
        return (<Fragment>
            <div className={"zhejiaoceng"} ref={"zhezhaoceng"} >
                <div>
                <span>提示</span>
                <p>请输入11位手机号</p>
                <button className={"button"} onClick={this.aaa}>确定</button>
                </div>
            </div>
            <div className={"phoneone"} ref={"phone"}>
            <Layout.Row gutter="10">
                <Layout.Col xs="8" sm="6" md="4" lg="3">
                    <div className="grid-content bg-purple">
                        <span className={"grid-contentp"} onClick={this.aoo} ref={"cancel"} >取消</span>
                    </div>
                </Layout.Col>
                <Layout.Col xs="16" sm="6" md="8" lg="6">
                    <div className="grid-content bg-purple"><p className={"grid-contentsp"}>登录</p></div>
                </Layout.Col>
            </Layout.Row>
            </div>
            <div className={"phoneone"}>
                <img className={"phoneoneimg"} alt={"标本"} src={"/img/Fuxcd1wWFCY-HNifMfUbrcVBqxlc?50X50&imageView2/1/w/50/h/50"}/>
                <select className={"select"}>
                    <option className={"phoneop"}>86</option>
                </select>
                <div className={"phoneoneinput"}>
                <input ref={"input"}  placeholder={"请输入手机号"} />
                </div>
            </div>
            <div className={"phoneone"}>
                <img className={"phoneoneimg"} alt={"标本"} src={"/img/FhVd-FHn1W_yhi5vMjtsAQGSicId?50X50&imageView2/1/w/50/h/50"}/>
                <div className={"phoneoneinput"}>
                    <input type={"password"} ref={"inputs"}  placeholder={"请输入密码"}/>
                </div>
                <span className={"phoneonespan"}>忘记密码？</span>
            </div>
            <div className={"phonetwo"}>
                <p className={"btn"}><button onClick={this.add.bind(this)} >登录</button></p>
                <p className={"btn"}><span>第三方账号</span></p>
            </div>
            <div className={"phonetwo"}>
                <img onClick={this.addweixin} className={"simg"} alt={"标本"} src={"/img/FmQ44nNcTSqmWx3s9wT0hUUBMPb1?200X200&imageView2/1/w/140/h/140"} />
                <img onClick={this.addqq} className={"simg"} alt={"标本"} src={"/img/Fq_j5DBvHFjeXIgXq-fFFDtiIvq5?200X200&imageView2/1/w/140/h/140"} />
            </div>
            <div className={"phoneone"}>
                <p className={"sspan"} onClick={this.register}><span >快速注册</span></p>
            </div>
        </Fragment>)
    }

}

export default withRouter(Signup);