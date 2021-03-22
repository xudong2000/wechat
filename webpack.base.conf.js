module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig,
    },
    //添加部分-----------start---------------------------------
    {
      // 此种方法在控制台中标签样式显示的是style标签样式
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader',
    },
    //添加部分------------end--------------------------------------
  ]
}
