import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {Input} from "element-react";
class feedbackone extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment>
            <div className={"feendbackone"}>
                <Input
                    type="textarea"
                    autosize={{ minRows: 8, maxRows: 8}}
                    placeholder="请告诉我们你的反馈或者意见"
                />
            <img alt={"微信"} src={require('E:\\baking\\hongpeibang\\src\\img\\qrcode_for_gh_98d29a03a480_860.jpg')}/>
            </div>
        </Fragment>)
    }

}

export default withRouter(feedbackone);