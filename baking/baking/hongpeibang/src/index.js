import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from "./app";
import 'element-theme-default';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import Addto from './router/top/addto/addto';
import INput from "./router/top/input/input";
import Remind from "./router/top/remind/remind";
import Noviceguide from "./router/so-so/noviceguide/noviceguide";
import BakingEncyclopedia from "./router/so-so/BakingEncyclopedia/BakingEncyclopedia";
import Dailysignin from "./router/so-so/Dailysignin/Dailysignin";
import Cookbook from "./router/so-so/Cookbook/Cookbook";
import Video from "./router/bottom/Video/Video";
import Circle from "./router/bottom/Circle/Circle";
import My from "./router/bottom/My/My";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
//HashRouter 反应比较快 本人亲自事件
//b什么什么开头路由有点小bug 返回需要点击两次
React.Component.prototype.$axios=axios;
ReactDOM.render(
    <Router>
        <Switch>
                {/*顶部路由*/}
                <Route exact component={Addto} path={'/Addto'}></Route>
                <Route  component={INput} path={'/INput'}></Route>
                <Route  component={Remind} path={'/Remind'}></Route>
            {/*头部*/}
            <Route  component={Noviceguide} path={'/Noviceguide'}></Route>
            <Route  component={BakingEncyclopedia} path={'/BakingEncyclopedia'}></Route>
            <Route  component={Dailysignin} path={'/Dailysignin'}></Route>
            <Route  component={Cookbook} path={'/Cookbook'}></Route>
            {/*底部*/}
            <Route  component={Video} path={'/Video'}></Route>
            <Route  component={Circle} path={'/Circle'}></Route>
            <Route  component={My} path={'/My'}></Route>
            <App/>
        {/* 小坑   一定要把这个app放在switch内部 不然路由不会跳转到新也买你*/}
        </Switch>

    </Router>
        ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
