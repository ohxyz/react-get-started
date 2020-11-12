const path = require( 'path' );

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join( __dirname, 'public' ),
        compress: true,
        port: 5000,
        open: true
    },
    module: {
        rules: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [ 'style-loader', 'css-loader' ]
        } ]
    }
};