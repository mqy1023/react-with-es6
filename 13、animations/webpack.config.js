var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

var config = {
    entry: './src/main.js',

    output: {
        path:'./dist',
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8888
    },

    module: {
        loaders: [{test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {presets: ['es2015', 'react']}},
          {
            test: /\.css$/,
            loader: 'style!css'
          }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
}

module.exports = config;
