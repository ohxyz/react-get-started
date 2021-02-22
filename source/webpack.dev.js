const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        port: 5000,
        overlay: true,
    },
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
        } ]
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: './src/assets/index.html',
            title: 'My Project',
        } ),
    ]
};
