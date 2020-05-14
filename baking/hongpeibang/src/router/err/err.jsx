import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
class err extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (<Fragment>
            <div>
            {/*404*/}
            {/*    <Map amapkey={YOUR_AMAP_KEY} version={VERSION} />*/}
            </div>
        </Fragment>)
    }

}

export default withRouter(err);