import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
class Newest extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            image:[],
            li:[],
            message:[],
        }


    }
    init(){
        fetch("/sum",{
            method:"post",
            headers:{
                "content-type":"application/json"
            }
        })
        // body:JSON.toString({a:1,b:3})
    }


    async componentDidMount(){
        const data = await  this.$axios.get("/api/feed/getCategory?");
        const li=await this.$axios.get("/api/community/getByLimit?isShow=4&_t=1588407897276&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzY4NzgxNywiaWF0IjoxNTg4Mzg1NDE3fQ.1zjEgQfQOMUS1z3i0CZoNulaEpYohIW5Os9-wqxZpZE&pageIndex=0&pageSize=99");
        const message= await  this.$axios.get("/api/v2/feed/getNew?_t=1588435070909&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzY4NzgxNywiaWF0IjoxNTg4Mzg1NDE3fQ.1zjEgQfQOMUS1z3i0CZoNulaEpYohIW5Os9-wqxZpZE&pageIndex=0&pageSize=10")
        const index = 0;
        this.setState({
            data:data.data.data.category.map(v=>{
                return v.item
            }),
            li:li.data.data.data.map(v=>{
                return v.name
            }),

        })
        this.setState({
            image:this.state.data[index],
        })
        function color16(){
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
            return color;
        }
        this.setState({
            color:color16(),
            message:message.data.data.content.map(v=>{
                return v
            })
        })
       console.log(this.state.message.map(v=>{
           return v
       }))

    }

    async id(e){
       await  this.props.history.push("/dish/"+e.currentTarget.getAttribute("data-cc"))
        console.log(e.currentTarget.getAttribute("data-cc"))
    }
    render() {
        return (<Fragment>
            <button onClick={this.init.bind(this)}>444</button>
            {/*轮播图*/}
            <div className={"Newest"}>
                <div className={"Newestone"}>
                            {
                                this.state.image.map((v, i) => {
                                    return (<div key={i}><img alt={"标本"} src={v.image}/></div>)

                                })
                            }
                </div>
                <div className={"Newesttwo"}>
                    {
                        this.state.li.map((v,i)=>{
                            return (<ul key={i}><li style={{background:this.state.color}}  ref={"color"} >{v}</li></ul>)
                        })
                    }
                </div>
                {
                    this.state.message.map((v,i)=>{
                        console.log(v.clientId)
                        return(
                            <div className={"NewestNewest"}  key={i}  >
                                <div className={"Newestthree"} >
                                    <img alt={"头像"} src={v.clientImage}/>
                                    <img alt={"达人"} src={"/img/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"}/>
                                    <span>{v.clientName}</span>
                                    <p ref={"div"} data-cc={v.clientId} onClick={this.id.bind(this)} >{v.createTime}</p>
                                </div>
                                <div className={"Masterthree"}>
                                    <img alt={"作品"} src={v.image}/>
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
            </div>
        </Fragment>)
    }

}

export default withRouter(Newest);