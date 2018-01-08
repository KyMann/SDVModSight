var path = require('path');
var webpack = require('webpack')
//These addresses simplify refactoring outside of an ide
var ROOT = path.resolve(__dirname, 'src/main/');
var SRC = path.resolve(ROOT, 'js');
var DEST = path.resolve(__dirname, 'src/main/resources/static/built')

module.exports = {
    entry: SRC + '/app.jsx',
    devtool: 'source-map',
    cache: true,
    debug: true,
    resolve: {
        root: [
        path.resolve(ROOT, js),
        path.resolve(ROOT, 'css')],
        //root: __dirname,
        alias: {},
        extensions: ['', '.js', '.jsx']
    }
    output: {
        path:DEST,
        filename: 'bundle.js'
        publicPath: '/dist/'
        },
    module: {
        loaders: [
            {test: /\.jsx?$/, //regex here to match on js and jsx files only
            exclude: /(node_modules)/,
            loader: ['babel-loader?presets[]=es2015&amp;presets[]=react'],
            include SRC
            },
            {test: /\.css$/, loader: 'style-loader!css-loacer'},
            {test: /\.less$/, loader 'style!css!less'},
            //theste tests are for bootstrap webpack interaction
            //loads bootstraps css
            {test: /\.(woff|woff2)(/?v=/d+/.\d+\.\d+)?$/, loader: 'url?limit10000&amp;mimetype=application/font-woff'},
            {test: /\.ttf(/?v=/d+/.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=application/octet-stream'},
            {test: /\eot(/?v=/d+/.\d+\.\d+)?$/, loader: 'file'},
            {test: /\svg(/?v=/d+/.\d+\.\d+)?$/, loader: 'url?limit=10000&amp;mimetype=image/svg+xml'}
            ]
        }
    };