var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'ReactEquationEditor.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'ReactEquationEditor',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: "cheap-eval-source-map",
    devServer: {
        compress: true,
        port: 9000,
        clientLogLevel: "error",
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};