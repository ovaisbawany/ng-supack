/**
 * Created by Umayr Shahid on 10/27/2015.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: ['webpack/hot/dev-server', './src/app.module']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
          '_': 'lodash'
        })
    ]
};
