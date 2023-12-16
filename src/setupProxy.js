const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: "http://localhost:4000",
  changeOrigin: true,
};
module.exports = (app) => {
  app.use("/api", createProxyMiddleware(proxy));
};
