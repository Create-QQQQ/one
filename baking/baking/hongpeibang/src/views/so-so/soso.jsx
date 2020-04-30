import React, {Component} from "react";
import {withRouter} from "react-router";

class SOSO extends Component {
    constructor() {
        super();
        this.state = {
            title:[]
        }
    }
    async componentDidMount() {
        const title = await this.$axios.get('/api/index/get?_t=1588174976854&');
        this.setState({
            title:title.data.data.category[0].item.map(v=>{
                return v
            })
        })

    }
    add=(e)=>{
        if(e.target.getAttribute('name')==="0"){
            this.props.history.push('/Noviceguide')
        }else if(e.target.getAttribute('name')=="1"){
            this.props.history.push('/BakingEncyclopedia')
        }else if(e.target.getAttribute('name')=="2"){
            this.props.history.push('/Dailysignin')
        }else if(e.target.getAttribute('name')=="3"){
            this.props.history.push('/Cookbook')
        }
    }
    render() {
        return (
            <div className={"SOSODIV"}>
            {
                this.state.title.map((v,i)=>{

                    return (<div key={i} className={"SOSOdiv"} name={i} onClick={this.add}>  <img name={i}  src={v.image} /><span  name={i}>{v.title}</span></div>)
                })

            }
            </div>
        )
    }

}

export default withRouter(SOSO) ;