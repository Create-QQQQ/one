import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class MID extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            content:[]
        }
    }
    async componentUpdate(){
        const {data}= await this.$axios.get("/api/education/getIndexByWeb?_t="+Date.now());
        const content=await this.$axios.get("/api/recommend/getRandContent?_t=1587794086105&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzA5NjA1MSwiaWF0IjoxNTg3NzkzNjUxfQ.mLnoB1Hs-bdJyPJYcVqXA9__Rd4aL13wQWYd7AsnJ2g&type=3&pageSize=10");
        this.setState({
                data:data.data.category,
                content:content.data.data.data
            }
        )
    }
    render() {
        return (<Fragment>
            <div className={"MID"}>
                <h3 className={"MIDH"}>视频推荐</h3> <li className={"MIDLI"}>更多信息</li>
                {
                this.state.content.map((v,i)=>(
                    <div className={"MIDdiv"}  key={i}>
                        <img src={v.coverImage} alt=""/>
                        <p>{v.coverTitle}</p>
                    </div>
                ))
            }</div>
            {
                this.state.data.map((v,i)=>(
                    <div className={"MID"} key={i}>
                        <h3 className={"MIDH"}>{v.title}</h3> <li className={"MIDLI"}>更多信息</li>
                        {
                            this.state.data.map((v,i)=>{return ((v.item).map((v,i)=>{return (<div className={"MIDdiv"} key={i}> <img alt={"标本"} src={v.image}/> <p className={"MIDP"}>{v.shareDescription}</p> </div>)}))})
                        }
                    </div>
                    ))
            }
            <div className={"FLLOR"}>
            </div>
        </Fragment>)
    }

}

export default  withRouter(MID);