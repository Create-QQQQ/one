import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {HashRouter as Router,NavLink, Route, Switch} from "react-router-dom";
import {i} from "element-react";
import Follow from "../../Follow/Follow";
import Newest from "../../Newest/Newest";
import Master from "../../Master/Master";
class Video extends Component {
    constructor() {
        super();
        this.state = {}
    }
    add=()=>{
        this.props.history.push('/Addto')
    }
    avv=()=>{
        this.props.history.push('/Remind')
    }
    render() {
        return (<Fragment><div className={"video"}>
            <div>
            <i className="el-icon-plus" onClick={this.add}></i>
                <ul>
                    <li><NavLink to={"/Video/Follow"}>关注</NavLink></li>
                    <li><NavLink to={"/Video/Newest"}>最新</NavLink></li>
                    <li><NavLink to={"/Video/Master"}>达人</NavLink></li>
                </ul>
                <img onClick={this.avv} alt={"标本"} src={"https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"} />

            </div >
            <Router>
                {/*视频圈路由*/}
                <Switch>
                <Route component={Follow} path={'/Video/Follow'}></Route>
                <Route exact component={Newest} path={'/Video/Newest'}></Route>
                <Route component={Master} path={'/Video/Master'}></Route>
                </Switch>
            </Router>
        </div>
        </Fragment>)
    }

}

export default withRouter(Video);