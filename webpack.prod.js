const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'dist' ),
        filename: 'bundle.[hash].js',
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
    ],
    optimization: {
        minimize: true,
    }
};
