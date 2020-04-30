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
}

