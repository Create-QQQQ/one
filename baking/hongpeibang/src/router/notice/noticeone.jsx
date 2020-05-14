import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";

class noticeone extends Component {
    constructor() {
        super();
        this.state = {
            data:[]
        }
    }
    add=()=>{
        this.props.history.go(-1)
    }
    async componentDidMount(){
        const data =await this.$axios.get("/api/notice/get?_t=1588624134115&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc3NzkyMDMzNiwiaWF0IjoxNTg4NjE3OTM2fQ.XnNkaw_skxWod2lRKrHp0GA3UFPYYPameLNq-GJxlis&noticeId=10004");
        this.setState({
            data:data.data.data.content
        })

    }
    render() {
        return (<Fragment>
            <div className={"noticetwo"}>
                <div className={"noticetwodiv"}>
                    <i className="el-icon-arrow-left" onClick={this.add}></i>
                    <h3>烘培帮</h3>
                </div>
                <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
            </div>
        </Fragment>)
    }

}

export default withRouter(noticeone);