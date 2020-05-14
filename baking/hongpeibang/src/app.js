import React, {Component, Fragment} from "react";
import ADDTO from "./views/top/addto/addto";
import INPUT from "./views/top/input/input";
import REMIND from "./views/top/remind/remind";
import SOSO from "./views/so-so/soso";
import MID from "./views/middle/mid";
import HOME from "./views/bottom/home/home";
import VIDEO from "./views/bottom/video/video";
import CIRCLE from "./views/bottom/circle/circle";
import MY from "./views/bottom/my/my";
class App extends Component{
    render() {
        return (<Fragment>
                <div className={"APP"}>
                    <ADDTO/><INPUT/><REMIND/>
                </div>
                <div className={"SOSO"}>
                <SOSO/>
                </div>
                <div className={"MIDD"}>
                <MID/>
                </div>
                <div className={"HEA"}>
                <HOME/><VIDEO/><CIRCLE/><MY/>
                </div>
            </Fragment>
        )
    }

}

export default App;