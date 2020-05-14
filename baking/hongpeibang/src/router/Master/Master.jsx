import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Master extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            a:[]
        }
    }

    async componentDidMount(){
        const data = await this.$axios.get("/api/v2/feed/getMasterNew?_t=1588410875614&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzY4NzgxNywiaWF0IjoxNTg4Mzg1NDE3fQ.1zjEgQfQOMUS1z3i0CZoNulaEpYohIW5Os9-wqxZpZE&pageIndex=0&pageSize=10");
        this.setState({
            a:data.data.data.content.map((v,i)=>{
                return  (v.image)
            }),
        })

        console.log(this.state.a)
        this.setState({
        data:data.data.data.content
    })
    //    用户头像 clientImage
    //    用户名称 clientName
    //    用户作品图片 image 也是作品链接
    //    作品链接简介 introduce  ####communityName
    //    标题 title
    //  createTime创建时间
    }
    render() {
        return (<Fragment>
            <div className={"Master"}>
            <div className={"Masterone"}>
                {
                    this.state.data.map((v,i)=>{
                    return(
                        <div key={i}>
                        <div className={"Mastertwo"}>
                            <img alt={"头像"} src={v.clientImage}/>
                            <img alt={"达人"} src={"/img/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"}/>
                            <span>{v.clientName}</span>
                            <p>{v.createTime}</p>
                        </div>
                        <div className={"Masterthree"}>
                            <img alt={"作品"} src={v.image}/>

                            <p className={"introduce"}><span>{v.communityName}</span>{v.introduce}</p>
                        </div>
                        <div className={"Masterfour"}>
                            <div className={"Masterfive"}>
                            <img alt={"点赞"} src={"/img/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"}/>
                            <span>点赞</span>
                            </div >
                            <div className={"Masterfive"}>
                            <img alt={".."} src={"/img/Fpq4Jkj8ll14Jd9xsBfFGur0J9b1?200X200&imageView2/1/w/38/h/38"}/>
                            <span>打赏</span>
                            </div >
                                <div className={"Masterfive"}>
                            <img alt={"评论"} src={"/img/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"}/>
                            <span>评论</span>
                                </div>
                        </div>
                        </div>
                    )

                })
                }

        </div></div></Fragment>)
    }

}

export default withRouter(Master);