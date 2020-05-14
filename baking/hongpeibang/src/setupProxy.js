const {createProxyMiddleware}=require('http-proxy-middleware');

module.exports=function (app) {
    app.use("/api",createProxyMiddleware({
        target:"https://api.hongbeibang.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
    app.use("/img",createProxyMiddleware({
        target:"https://image.hongbeibang.com",
        changeOrigin:true,
        pathRewrite:{
            "^/img":""
        }
    }))
    app.use("/weixin",createProxyMiddleware({
        target:"https://api.weixin.qq.com",
        changeOrigin:true,
        pathRewrite:{
            "^/weixin":""
        }
    }))
    app.use("/hpb",createProxyMiddleware({
        target:"http://127.0.0.1",
        changeOrigin:true,
        pathRewrite:{
            "^/hpb":""
        }
    }))

}

