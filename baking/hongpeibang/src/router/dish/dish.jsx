import React, {Component, Fragment} from "react";
import {withRouter} from "react-router";
import {i} from "element-react";
// import {Map} from "react-amap";
// import Geolocation from "react-amap-plugin-geolocation";
import Map from 'react-amap/lib/map';
// import Marker from 'react-amap/lib/marker';
const mapKey = '1234567809843asadasd'
class dish extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        console.log(this.props.match.params.id)
        return (<Fragment>
            <div className={"account"}>
                <div className={"accountone"}>
                    <i className="el-icon-arrow-left" onClick={this.add}></i>
                    <span>作品</span>
                </div>
                <div id="app">
                    <Map amapkey={mapKey} zoom={15} />
                </div>
            </div>
        </Fragment>)
    }

}

export default withRouter(dish);