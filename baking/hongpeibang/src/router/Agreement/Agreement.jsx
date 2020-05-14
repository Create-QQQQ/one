import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class Agreement extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }
    async componentDidMount(){
        const {data} = await this.$axios.get("/api/notice/get?_t=1588264578095&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzA5NjA1MSwiaWF0IjoxNTg3NzkzNjUxfQ.mLnoB1Hs-bdJyPJYcVqXA9__Rd4aL13wQWYd7AsnJ2g&noticeId=10001");
        this.setState({
            data:data.data
        })
        console.log(data.data)
        console.log(data.data.title)
    }
    aoo=()=>{
        this.props.history.go(-1)
    }
    render() {
        return (<Fragment>
            <div className={"Agree"}>
                <i className="el-icon-arrow-left" onClick={this.aoo}></i>
                <h3>登录</h3>
                <div className={"Agreediv"}>
                    <p  className={"Divhtml"} dangerouslySetInnerHTML={{__html:this.state.data.content}}></p>
                </div>
            </div>
        </Fragment>)
    }

}

export default withRouter(Agreement);