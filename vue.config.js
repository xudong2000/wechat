module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:2077',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
