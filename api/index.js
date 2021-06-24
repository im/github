const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = (req, res) => {
    createProxyMiddleware({
        target: 'https://github.com/',
        changeOrigin: true,
    })(req, res)
}
