import React, {Component} from "react";
import {withRouter} from "react-router";
import HOME from "../../views/bottom/home/home";
import VIDEO from "../../views/bottom/video/video";
import CIRCLE from "../../views/bottom/circle/circle";
import MY from "../../views/bottom/my/my";
class singuping extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    add=()=>{
        this.props.history.push("/account")
    }
    addprofile=()=>{
        this.props.history.push("/profile")
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className={"singuping"}>
                <div className={"singupingone"}>
                    <i className="el-icon-setting" onClick={this.add}></i>
                </div>
                <div className={"singupingtwo"}>
                    <div>
                    <img alt={"头像"} onClick={this.addprofile} className={"singupingtwoone"}  src={"https://image.hongbeibang.com/FgkdYU15WoffQRG5sONPRb5agHAl?132X132&imageView2/1/w/132/h/132"} />
                    <span >name</span>
                    <img className={"singupingtwotwo"} alt={"达人"} src={"https://image.hongbeibang.com/Fkwt9tYiYAFxX-lC-WHvmbPSOUwv?94X94&imageView2/1/w/30/h/30"}/>
                    <img  className={"singupingtwothree"} alt={"等级"}  src={"https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50"}/>
                    </div>
                    <div className={"singupingtwoid"}>
                        <span >id:{this.props.match.params.id}</span>
                        <i className="el-icon-arrow-right" onClick={this.addprofile}></i></div>
                    <div className={"singupingtwojy"}>经验值</div>

                    <ul>
                        <li>
                            <span>0</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p>
                                粉丝
                            </p>
                        </li>
                        <li>
                            <span>0</span>
                            <p>帮贡</p>
                        </li>
                    </ul>
                    <div className={"singupingtwofour"}>
                        <div>
                            <img alt={"作品"} src={"https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80"}/>
                            <p>作品</p>
                        </div>
                        <div>
                            <img alt={"食谱"} src={"https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80"}/>
                            <p>食谱</p>
                        </div>
                        <div>
                            <img alt={"收藏"} src={"https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80"}/>
                            <p>收藏</p>
                        </div>
                        <div>
                            <img alt={"问题"} src={"https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80"}/>
                            <p>问题</p>
                        </div>
                    </div>
                </div>
                <div className={"singupingthree"}>
                    <img alt={"勋章库"} src={"https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48"}/>
                    <span>勋章库</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingthree"}>
                    <img alt={"精彩活动"} src={"https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48"}/>
                    <span>精彩活动</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingthree"}>
                    <img alt={"每日签到"} src={"https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48"}/>
                    <span>每日签到</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingthree"}>
                    <img alt={"我的课程"} src={"https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48"}/>
                    <span>我的课程</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingfive"}>
                    <img alt={"浏览记录"} src={"https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48"}/>
                    <span>浏览记录</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingfive"}>
                    <img alt={"达人申请"} src={"https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48"}/>
                    <span>达人申请</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"singupingfive"}>
                    <img alt={"帮贡兑换"} src={"https://image.hongbeibang.com/Fn2YVwr3Ng_AQlJvQCWtBoRBDyjR?48X48&imageView2/1/w/48/h/48"}/>
                    <span>帮贡兑换</span>
                    <i className="el-icon-arrow-right"></i>
                </div>
                <div className={"HEA"}>
                    <HOME/><VIDEO/><CIRCLE/><MY/>
                </div>
            </div>
        )
    }

}

export default withRouter(singuping);