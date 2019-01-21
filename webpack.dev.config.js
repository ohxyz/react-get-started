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
    },
    module: {
        rules: [ 
            {
                test: /\.js[x]{0,1}$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: [ '@babel/preset-env', '@babel/preset-react' ] }
                }
            },
            {
                test: /\.css$/,
                use: [ 
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    }
};