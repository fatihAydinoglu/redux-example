const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            './index.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'), // eslint-disable-line no-undef
        publicPath: '/',
        sourceMapFilename: 'bundle.js.map'
    },
    context: resolve(__dirname, 'src'), // eslint-disable-line no-undef
    devtool: 'inline-source-map',
    devServer: {
        contentBase: resolve(__dirname, 'dist'), // eslint-disable-line no-undef
        publicPath: '/',
        historyApiFallback: true
    },
    module: {
        rules: [
            { // js loader
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            }
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html'), // eslint-disable-line no-undef
            filename: 'index.html',
            inject: 'body'
        })
    ]
};