import React from 'react';
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
import home from "./views/bottom/home/home";
import My from "./router/bottom/My/My";
import Agreement from "./router/Agreement/Agreement";
import WEIXIN from "./router/WEIXIN/WEIXIN";
import Signup from "./router/Singup/Signup";
import register from "./router/register/register";
import QQ from  "./router/QQ/QQ";
import singuping from "./router/singuping/singuping";
import MID from "./views/middle/mid";
import account from "./router/account/account";
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import profile from "./router/profile/profile";
import accountBinding from "./router/accountBinding/accountBinding";
import feedback from "./router/feedback/feedback";
import noticeone from "./router/notice/noticeone";
import noticetwo from "./router/notice/noticetwo";
import dish from "./router/dish/dish";
// import err from "./router/err/err";
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
            {/*mid*/}
            <Route  component={MID} path={'/MID'}></Route>
            {/*底部*/}
            <Route  component={Video} path={'/Video'}></Route>
            <Route  component={Circle} path={'/Circle'}></Route>
            <Route  component={home} path={'/home'}></Route>
            <Route  component={My} path={'/My'}></Route>
            {/*协议路由*/}
            <Route  component={Agreement } path={'/Agreement'}></Route>
            {/*微信登录路由*/}
            <Route  component={WEIXIN} path={'/WEIXIN'}></Route>
            {/*QQ快捷登录*/}
            <Route  component={QQ} path={'/QQ'}></Route>
            {/*其他方式登录*/}
            <Route  component={Signup} path={'/Singup'}></Route>
            {/*手机验证路由*/}
            <Route  component={register} path={'/register'}></Route>
            {/*登录成功*/}
            <Route  component={singuping} path={'/singuping/:id'}></Route>
            {/*设置个人资料*/}
            <Route  component={account} path={'/account'}></Route>
            {/*个人资料修改*/}
            <Route  component={profile} path={'/profile'}></Route>
            {/*个人账户*/}
            <Route  component={accountBinding} path={'/accountBinding'}></Route>
            {/*xx*/}
            <Route  component={feedback} path={'/feedback'}></Route>
            <Route  component={noticeone} path={'/noticeone'}></Route>
            <Route  component={noticetwo} path={'/noticetwo'}></Route>
            <Route  component={dish} path={'/dish/:id'}></Route>
            {/*<Route component={err} path={'/err'}></Route>*/}
            {/*<Redirect to={'/err'}></Redirect>*/}
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
