const express=require('express');
const bodyParser=require('body-parser');
const db =require('./moudle/db');
const tools=require('./moudle/tools');
const app=express();
app.use(bodyParser.json())
app.get('/adminlist',(req,res)=>{
    //个人接口
    const {id,password}=req.query;
    console.log(id,password);
    db.findOne("adminlist",{
        id,
        password,
    },function (err,info) {
        if(err){
            tools.json(res)
        }else{
            if(info){
                tools.json(res,1,"账号密码正确")

                // db.collection("adminlist").findOne("adminlist")({
                //     id
                // },function (err,info) {
                //     if()
                // })
            } else {
                tools.json(res,-1,"密码或者账号错误")
            }
        }
    })
    //请求数据库
})
app.get('/sum',(req,res)=>{
    res.json({
        ok:1,
        msg:"成功"
    })
})
app.post('/sum',(req,res)=>{
    res.json({
        ok:1,
        msg:"成功"
    })
})
app.listen(80,()=>{
    console.log("success")
})