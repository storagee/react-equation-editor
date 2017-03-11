var path = require('path');

module.exports = {
    entry: './src/ReactEquationEditor.js',
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
    externals: {
        'MathJax': 'MathJax',
        'react': 'react',
        'react-dom': 'ReactDOM'
    },
    devtool: false
};