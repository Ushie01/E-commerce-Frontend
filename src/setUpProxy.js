const { createProxyMiddleware } = require('http-proxy-middleware');


const flutterwaveProxy = createProxyMiddleware('/api', {
    target: 'https://api.flutterwave.com/v3',
    changeOrigin: true,
    pathRewrite: (path, req) => {
        const transactionId = req.query.transaction_id;
        return path.replace('/api', `/transactions/${transactionId}/verify`);
    },
});


module.exports = function(app) {
    app.use(
            '/v3/payments',
            createProxyMiddleware({
            target: 'https://api.flutterwave.com',
            changeOrigin: true,
        })
    );
    
    app.use(flutterwaveProxy);

    app.use(
            '/api/v3/products',
            createProxyMiddleware({
            target: 'https://ecommerce-backend-3bm2.onrender.com',
            changeOrigin: true,
        })
    );
};
